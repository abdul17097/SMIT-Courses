import React, { useState } from "react";
import Theme from "./components/Theme";
import DashboardLayout from "./components/DashboardLayout";
import Experiment from "./components/Experiment";
import MultipleState from "./components/MultipleState";
import ListKeys from "./components/ListKeys";
import ConditionalStatement from "./components/ConditionalStatement";
import BasicForm from "./components/forms/BasicForm";
import ProForm from "./components/forms/ProForm";

const App = () => {
  const [name, setName] = useState("");
  const displayName = () => {
    alert(name);
    setName("");
  };

  return (
    // <div className="flex flex-col gap-3.5 w-[300px] border m-auto mt-10 p-10">
    //   <input
    //     onChange={(event) => setName(event.target.value)}
    //     type="text"
    //     value={name}
    //     className="border p-2"
    //   />
    //   <button
    //     onClick={displayName}
    //     className="border p-2 cursor-pointer rounded-3xl"
    //   >
    //     Click
    //   </button>
    //   <Theme />
    // </div>
    // <DashboardLayout>
    //   <div className="col-span-4 h-full overflow-auto">
    //     <h1>welcom to Dashboard!</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum
    //       ipsam quisquam, molestias enim pariatur veritatis ipsa quia earum eius
    //       fugit illo sequi impedit voluptatum tempora sapiente et libero fugiat
    //       corporis distinctio, quaerat architecto autem! Iste, eligendi eos.
    //       Odit culpa quidem quo porro reprehenderit nostrum saepe quos adipisci
    //       voluptate explicabo dolor veritatis, error ab maxime eos, optio quasi
    //       at nulla neque aperiam quia! Laudantium quidem tempora facere eum
    //       velit debitis delectus minus possimus esse perferendis soluta
    //       laboriosam expedita repellat laborum perspiciatis eveniet illum
    //       voluptas totam vitae reiciendis, magni magnam ducimus. Consectetur
    //       nemo maxime exercitationem nostrum soluta eius repellendus ipsum
    //       ducimus, odio illum dolorum aut distinctio fuga non veritatis maiores
    //       explicabo quam vero facilis aliquid iure! In, consequuntur modi?
    //       Doloremque possimus nesciunt repellendus fugiat non quibusdam nulla
    //       facilis sed excepturi rerum? Quas minima esse optio, officiis
    //       similique iusto suscipit, aliquam quia minus modi fuga. Rem reiciendis
    //       inventore provident modi animi quidem natus quo suscipit maxime
    //       expedita consequatur at est aliquid neque deserunt, molestiae rerum
    //       consequuntur. Saepe, est. Nemo veniam quo enim minima sunt vero minus
    //       neque excepturi, dolores suscipit doloribus a quos culpa voluptate
    //       aperiam autem ea cupiditate saepe. Ex praesentium, nam beatae dicta
    //       quis aliquid odit sapiente ab sint, architecto dignissimos cum
    //       recusandae cumque alias consectetur in laudantium id, voluptatibus
    //       eveniet voluptate dolorum quidem corporis totam minus. Mollitia, sit
    //       optio, corporis totam, exercitationem assumenda maxime aperiam ex
    //       magni beatae veritatis quis explicabo ipsum quod error quos nemo
    //       perferendis aliquam ea ad cumque cupiditate distinctio minus magnam?
    //       Dolores, vero iusto in fugit magni recusandae aliquam sint iste nemo
    //       mollitia maxime reiciendis soluta consectetur consequuntur
    //       repudiandae, at corporis non error cumque labore! Ipsum quia eum
    //       commodi? Quos explicabo illo rerum ullam, dicta eligendi, voluptates
    //       fugiat repudiandae laboriosam natus maiores reprehenderit deleniti
    //       cumque soluta! Explicabo nulla ipsa tempora nostrum, repellat ab,
    //       animi ex repellendus, consequatur velit alias placeat tempore saepe
    //       libero sequi mollitia assumenda beatae soluta? Non possimus porro
    //       velit aliquam, excepturi et dolores numquam fugiat similique, voluptas
    //       repellendus pariatur earum accusamus. Modi ducimus fugiat odit optio,
    //       delectus veritatis laboriosam eaque porro necessitatibus ipsam.
    //       Recusandae, blanditiis. Cupiditate et reprehenderit debitis, assumenda
    //       voluptas, id, minima veniam culpa repudiandae exercitationem quasi?
    //       Ipsam, veniam? Qui nesciunt assumenda architecto fuga porro commodi
    //       quibusdam blanditiis in nulla fugiat nemo, quisquam dignissimos cumque
    //       ullam quam? Ipsam modi itaque nisi optio doloribus labore molestias
    //       voluptas reprehenderit ratione. Esse in veniam ipsam voluptatum quidem
    //       libero ab itaque blanditiis consectetur sapiente ratione ad quisquam
    //       obcaecati at tempore, necessitatibus recusandae consequuntur quasi,
    //       eligendi facere laudantium. Excepturi sapiente at quibusdam placeat,
    //       dolorum ab corrupti? Assumenda cupiditate quidem, eaque veniam qui
    //       vitae a quae? Facere ad praesentium iure, deleniti nam incidunt quasi,
    //       itaque ipsum fuga commodi nobis voluptatem consequatur culpa? Cum
    //       asperiores suscipit nesciunt nulla id quam dignissimos vero quibusdam
    //       porro quis officiis numquam aspernatur aliquid delectus nam cumque
    //       repudiandae, quidem neque sint aliquam eaque voluptate maiores enim.
    //       Commodi dignissimos necessitatibus corrupti laborum explicabo dolorum.
    //       Adipisci magni similique nulla, harum, sint laborum repellat expedita
    //       quos quis quidem impedit saepe cum veritatis fugit assumenda
    //       consequuntur totam. Commodi ad odio illum accusantium fugit quod
    //       tempore cum inventore nemo velit, ratione totam deleniti, illo tempora
    //       quisquam sunt. Aperiam, consectetur illum! Modi sunt eos aperiam
    //       tempora fugiat in eveniet dicta eum laudantium, harum dolorem magnam.
    //       Assumenda itaque explicabo odit neque suscipit tempore cupiditate
    //       molestias hic praesentium error voluptatibus veniam, laudantium
    //       asperiores architecto debitis, quod eius repellendus! Possimus
    //       doloribus maiores libero? Ipsum commodi, obcaecati hic magni animi
    //       suscipit veniam consectetur laboriosam aperiam inventore beatae
    //       eveniet tempore reprehenderit velit repellat ea illum! Aliquid maxime
    //       inventore, eos, repudiandae eius quia enim velit distinctio suscipit
    //       impedit delectus debitis in iste sequi, consectetur fuga! Ea,
    //       consequuntur. Dicta rem obcaecati commodi, quas dolore maiores
    //       molestias recusandae voluptate quod sed. Similique ullam dolore
    //       repudiandae tempora numquam eaque velit, necessitatibus in quos dolor,
    //       nulla suscipit quidem aliquam magnam eveniet eum quod fugit dolorum
    //       impedit. Omnis quidem earum voluptate error, iste corrupti dolore vero
    //       expedita. Perspiciatis alias earum necessitatibus impedit ad cum autem
    //       culpa porro, ducimus dignissimos eius magnam! Aspernatur aperiam
    //       explicabo nobis pariatur dolore debitis! Porro tenetur provident
    //       eligendi eos cumque perspiciatis quis eum aspernatur totam rem
    //       voluptatum autem sunt nemo amet, eveniet similique placeat atque fugit
    //       veritatis, corrupti necessitatibus voluptate. Fugit voluptatibus
    //       veritatis voluptate aliquid distinctio? Ullam ipsum, similique eum
    //       animi dolor assumenda quo illum, voluptatem libero quisquam
    //       repudiandae consequatur atque hic iusto totam earum nostrum at
    //       necessitatibus ratione reprehenderit magni quae, consectetur eligendi.
    //       Voluptatibus reiciendis exercitationem eligendi sunt voluptatem
    //       assumenda velit et porro corporis, dolores quo deserunt, distinctio
    //       repudiandae eius sequi ipsum beatae commodi! Hic nam minus omnis atque
    //       adipisci odit dolorum consectetur magnam sint natus cum, ducimus
    //       recusandae blanditiis tenetur corporis pariatur aliquid? Eaque sequi
    //       quod soluta exercitationem vitae velit consequatur ducimus, odio,
    //       assumenda quaerat natus magni necessitatibus praesentium nostrum
    //       similique laboriosam hic fuga consequuntur dolores ut, itaque
    //       blanditiis provident incidunt. Perspiciatis, autem velit! Fuga quasi
    //       iste itaque obcaecati velit aspernatur vel dignissimos, animi
    //       explicabo magni, eligendi sunt ipsum quo corporis blanditiis quas
    //       voluptate aliquid commodi nostrum dolores nesciunt dicta soluta quis
    //       eos! Veniam, optio impedit molestiae animi iure nam earum dolore
    //       voluptatem facere quia ipsum culpa fugiat sunt cumque neque! Quaerat
    //       quidem delectus veniam asperiores numquam dolore provident fugiat
    //       sapiente minima pariatur? Officiis est consequatur rem sapiente
    //       distinctio suscipit quisquam optio dolor? Nostrum, hic rerum
    //       distinctio perspiciatis labore cum dolore ipsam maxime minima quidem
    //       ea aliquam vero! Culpa cum sequi, dolores exercitationem, sed earum
    //       veritatis sint odit, unde magni delectus soluta magnam excepturi
    //       veniam quibusdam facilis laborum deserunt quis in debitis consequatur
    //       reiciendis vero ipsa. Dolorem illum iste sunt pariatur quisquam quo,
    //       minima mollitia! Quo non maxime, velit fugit expedita corporis dicta
    //       veritatis quia vitae veniam magnam, repellat fuga sit recusandae
    //       laboriosam maiores quaerat eveniet iure molestias optio excepturi
    //       explicabo? Placeat repudiandae doloremque adipisci suscipit quidem
    //       earum nulla, porro dolore aspernatur recusandae quis? Voluptatibus
    //       iste id ipsa dolores officia reprehenderit odit reiciendis officiis
    //       aut? Nemo omnis mollitia beatae iusto dignissimos qui repellat,
    //       deserunt ipsum hic. Enim nostrum nulla dignissimos repellat
    //       consequatur? Eius commodi, ad quasi quibusdam hic eos assumenda
    //       laudantium culpa maxime quaerat aperiam ipsa odio cum. Voluptatibus
    //       iste reprehenderit accusantium dolor, eos quia dolorum sapiente quas,
    //       ex cumque obcaecati modi eaque! Nostrum iure iusto illum officia,
    //       dolore quidem illo inventore impedit deleniti at est esse aliquam
    //       ducimus neque labore, nihil voluptates? Explicabo perferendis neque
    //       reprehenderit debitis iure veniam optio eaque. Veritatis animi
    //       similique hic corrupti possimus reiciendis cupiditate, totam,
    //       explicabo quas sunt, esse incidunt in impedit eum. Repudiandae magni
    //       fugit sequi tenetur, quaerat voluptatem fuga provident nisi. Iusto,
    //       dolore. Cumque, assumenda. Illo esse at, aperiam consequatur optio
    //       repellat atque ullam nostrum, tempora necessitatibus incidunt illum?
    //       Id ut magni culpa sunt repellat vitae dolorem sequi quod
    //       exercitationem totam in nisi esse deleniti commodi velit, obcaecati ad
    //       est perspiciatis impedit tempora! Est cum maiores, voluptate beatae ex
    //       aperiam, quis odio earum culpa alias molestias tempore, voluptatum
    //       consequatur sed autem nemo rerum neque et dolorem nisi magni
    //       voluptatibus nulla veniam? Tenetur impedit maiores dolorem eveniet
    //       autem molestias quod rerum neque cupiditate cumque inventore doloribus
    //       voluptatibus labore omnis ipsa harum soluta, ut, quia necessitatibus
    //       at debitis, aperiam temporibus dolore enim. Iste fuga autem nobis quia
    //       repellat dolor quibusdam quisquam veritatis ea suscipit, quod nisi
    //       quas, rerum ducimus accusamus eligendi voluptatem maxime? Nemo
    //       blanditiis debitis molestias reprehenderit dicta, ex excepturi sequi
    //       inventore, tempora ducimus enim qui aut nulla labore illo, libero
    //       quibusdam quisquam repellat est itaque. Tempora voluptates officiis et
    //       reiciendis, voluptatibus blanditiis aperiam iure, voluptate deserunt,
    //       est cumque dolor ex magni eaque expedita officia ullam labore placeat
    //       culpa numquam odit. Ducimus animi optio libero. Porro quidem excepturi
    //       architecto soluta, eum possimus, minima libero ipsam ex fuga
    //       temporibus dolorum velit corporis a ipsum dolor sed labore
    //       reprehenderit sint in, molestias quaerat nam. Neque aspernatur
    //       eligendi temporibus, necessitatibus, aliquam pariatur asperiores
    //       quibusdam aperiam earum voluptates enim repudiandae, error qui
    //       expedita ea tenetur? Quasi rerum nobis, sequi iure eius quod esse
    //       similique inventore fugiat nihil reprehenderit officiis libero,
    //       aliquid delectus enim consectetur. Est consectetur vero veritatis sed
    //       commodi accusamus pariatur, dolores numquam adipisci voluptatibus
    //       sequi, officiis magnam similique cum dignissimos omnis voluptatem hic
    //       quaerat doloremque qui! Dolorem voluptatem ab facilis quos. Assumenda
    //       accusamus aliquam voluptatibus praesentium libero excepturi, similique
    //       exercitationem quae labore dolorem corporis, sint suscipit rerum at
    //       amet explicabo provident pariatur molestias, sed dicta est voluptate
    //       distinctio? Porro expedita quaerat quasi magni et soluta, at
    //       exercitationem quisquam sit voluptas rem quis est iste placeat
    //       deleniti, eligendi perferendis velit quam molestiae iusto facere
    //       temporibus culpa! Sapiente facere itaque facilis quas accusamus dicta,
    //       dolores at atque aliquid aperiam! Similique facere, eaque illo
    //       necessitatibus doloribus quo omnis at vero sapiente vel alias magnam
    //       commodi, eligendi, consequatur repudiandae saepe autem veritatis
    //       voluptatum maiores deleniti nemo nostrum adipisci? Ipsum iusto minima
    //       necessitatibus soluta quo suscipit officiis et quasi doloribus libero
    //       omnis impedit corporis modi quas a veritatis officia obcaecati dolore
    //       ea, exercitationem, est nulla dolor? Consequatur asperiores dolores
    //       atque ad suscipit, rem aperiam similique animi, quis voluptas iure?
    //       Illo neque ipsa a fugiat dolores quibusdam consectetur, labore eos
    //       quod alias, saepe animi molestias hic esse rem iste quae. Distinctio
    //       soluta molestiae atque fuga suscipit! Numquam in pariatur nam
    //       molestiae consectetur expedita omnis velit hic optio ullam dolor,
    //       voluptatum temporibus earum quam saepe, a mollitia delectus!
    //       Voluptates sint vitae optio blanditiis. Dignissimos, laborum atque a,
    //       id placeat, doloremque autem ducimus voluptatem minima numquam porro
    //       natus fugiat voluptatibus voluptates. Nostrum quod eligendi odio,
    //       sapiente ex sunt tenetur similique pariatur eum repudiandae hic ipsa
    //       nam ipsam consectetur autem commodi harum asperiores maxime nulla ab
    //       eaque suscipit, beatae vitae? Temporibus, neque ipsa, iusto saepe
    //       incidunt iste velit necessitatibus consequatur, quaerat fugit
    //       molestiae rerum quasi voluptatem expedita tempora dolores doloribus.
    //       Iste quae est sunt atque. Amet cum sit odio voluptates, temporibus
    //       quos quas et recusandae nesciunt laborum harum quisquam repellat
    //       adipisci natus magnam accusantium architecto necessitatibus! Labore
    //       hic exercitationem voluptatibus, facere incidunt ratione deleniti
    //       magnam libero dicta placeat voluptatum, voluptates aut eligendi.
    //       Molestiae nesciunt, deleniti enim, odio debitis eos quos totam
    //       explicabo qui ipsum aliquid distinctio eligendi saepe magnam natus
    //       placeat minus porro facilis soluta. In necessitatibus nulla quis modi
    //       architecto asperiores labore possimus. Molestiae, laudantium corrupti.
    //       Dolores, saepe beatae? Distinctio aperiam dignissimos eveniet ex porro
    //       laborum reiciendis eius quis architecto recusandae nihil ad quaerat
    //       neque, error quibusdam similique quae, amet minus consequatur impedit.
    //       Temporibus autem tempore tempora eum eius corporis tenetur voluptates
    //       aliquam alias at eaque veniam minus repellendus esse, voluptatum
    //       maiores, voluptate nisi rerum aperiam distinctio in officia dolor nemo
    //       recusandae! Quibusdam nihil delectus quam eos optio deserunt numquam
    //       in rem non, possimus eligendi cumque odio atque distinctio aspernatur
    //       nostrum expedita? Neque omnis alias fugiat itaque ipsum. Laboriosam ab
    //       quisquam delectus reprehenderit incidunt, corporis vel cumque velit
    //       dicta veniam quidem facere iure tempore! Illo asperiores voluptates
    //       soluta quasi facilis. Suscipit exercitationem, nostrum nam, quasi
    //       quaerat molestias repellendus numquam aliquam vel earum alias, error
    //       debitis et repudiandae eaque quam dolorem! Vero nostrum quisquam
    //       voluptatibus laudantium sint magnam facilis expedita corrupti
    //       architecto pariatur dolorem esse temporibus corporis fugit voluptate,
    //       dicta, ullam, consequuntur vitae nobis saepe veniam. Nam ipsum minus
    //       non suscipit odit, earum reiciendis reprehenderit soluta! Ipsam
    //       impedit doloribus quo, ducimus consequuntur deserunt ratione nisi,
    //       nulla minus dolore quod quaerat commodi sequi obcaecati nostrum
    //       adipisci sed voluptates voluptatibus. Quia doloremque sint repellat
    //       nisi earum. Qui at cum consequuntur accusantium sit est consectetur
    //       deleniti nam harum facilis? Quam officia eaque, magnam minima ratione
    //       nemo cupiditate nam excepturi quos natus amet expedita distinctio.
    //       Vitae quod illum nam possimus sint minima adipisci aliquam eligendi
    //       quae saepe earum itaque libero blanditiis sequi voluptatem tenetur non
    //       quos nobis, perferendis, dicta autem dolorem porro hic? Esse,
    //       molestias fugit! Ab delectus ea nihil illo minima voluptates, nisi
    //       repellendus. Similique cum doloribus velit saepe a tempora, magni
    //       ipsam delectus omnis sequi rerum ut excepturi magnam iusto, repellat
    //       quae id debitis minima obcaecati in beatae. Sit quae autem culpa
    //       repudiandae nulla excepturi fugit accusantium aliquam eius, laudantium
    //       voluptatem necessitatibus sed tempora, repellendus ipsam cupiditate
    //       dignissimos est sequi unde recusandae neque! Ipsam reprehenderit
    //       dolorum ad iure deleniti provident labore culpa numquam id, iusto
    //       atque quos, modi laudantium tempore cumque illum. Officiis ut fuga qui
    //       et, quaerat sit provident.
    //     </p>
    //   </div>
    // </DashboardLayout>
    // <Experiment />
    // <MultipleState />
    // <ListKeys />
    // <ConditionalStatement />
    // Forms
    // <BasicForm />
    <ProForm />
  );
};

export default App;
