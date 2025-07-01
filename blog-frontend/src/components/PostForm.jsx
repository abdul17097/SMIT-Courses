import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useDispatch } from "react-redux";
import { addPost } from "@/redux/slices/postSlice";
import { useSelector } from "react-redux";
import { fetchTags } from "@/redux/slices/tagSlice";
import axiosInstance from "@/axios/axiosInstance";
import axios from "axios";
import { toast } from "react-toastify";

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Content is required"),
  tags: z.array(z.string()).optional(),
  file: z.any().optional(),
  isPublished: z.boolean().optional(),
});

export const PostForm = ({ isEdit = false, postData = null }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const dispatch = useDispatch();
  const {
    tags,
    loading: tagLoading,
    error: tagError,
  } = useSelector((state) => state.tags);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: [],
      isPublished: false,
    },
  });
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  console.log(tags);

  useEffect(() => {
    if (isEdit && postData) {
      reset({
        title: postData.title || "",
        description: postData.description || "",
        tags: postData.tags?.map((tag) => tag._id) || [],
        isPublished: postData.isPublished || false,
      });
      if (postData.file) {
        setPreviewImage(postData.file);
      }
    }
  }, [isEdit, postData, reset]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("isPublished", String(data.isPublished ?? false));
      data.tags?.forEach((tagId) => formData.append("tags", tagId));
      if (data.file instanceof FileList && data.file[0]) {
        formData.append("file", data.file[0]);
      }

      const response = await axiosInstance.post("/post/new-post", formData);

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }

      console.log("Post created:", response.data.success);

      if (!isEdit) reset();
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        {isEdit ? "Edit Post" : "Create New Post"}
      </h2>

      {/* Title */}
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" {...register("title")} />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      {/* Content */}
      <div>
        <Label htmlFor="description">Content</Label>
        <Textarea id="description" {...register("description")} />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Feature Image */}
      <div>
        <Label htmlFor="file">Feature Image</Label>
        <Input
          type="file"
          accept="image/*"
          {...register("file")}
          onChange={(e) => {
            register("file").onChange(e);
            const file = e.target.files?.[0];
            if (file) setPreviewImage(URL.createObjectURL(file));
          }}
        />
        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            className="mt-2 max-h-48 rounded-md border"
          />
        )}
      </div>

      {/* Tags Multi-Select */}
      <div>
        <Label>Tags</Label>
        <Controller
          name="tags"
          control={control}
          render={({ field }) => {
            const selected = field.value || [];
            return (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    {selected.length > 0
                      ? `${selected.length} tag(s) selected`
                      : "Select tags"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px]">
                  <div className="space-y-2">
                    {tags?.map((tag) => {
                      const isChecked = selected.includes(tag._id);
                      return (
                        <label
                          key={tag._id}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Checkbox
                            checked={isChecked}
                            onCheckedChange={(checked) => {
                              const newTags = checked
                                ? [...selected, tag._id]
                                : selected.filter((id) => id !== tag._id);
                              field.onChange(newTags);
                            }}
                          />
                          {tag.name}
                        </label>
                      );
                    })}
                  </div>
                </PopoverContent>
              </Popover>
            );
          }}
        />
      </div>

      {/* Is Published */}
      <div>
        <Label className="flex items-center gap-2">
          <Checkbox {...register("isPublished")} />
          Published
        </Label>
      </div>

      {/* Submit */}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting
          ? isEdit
            ? "Updating..."
            : "Creating..."
          : isEdit
          ? "Update Post"
          : "Create Post"}
      </Button>
    </form>
  );
};
