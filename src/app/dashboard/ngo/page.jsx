"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtVerify } from "jose";

export default function FarmerDashboard() {
  const router = useRouter();

  useEffect(() => {
    async function verifyToken() {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        
        // Verify role
        if (payload.role !== 'farmer') {
          router.push(`/dashboard/${payload.role}`);
        }
      } catch (error) {
        console.error('Token verification failed:', error);
        router.push('/login');
      }
    }

    verifyToken();
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-teal-600 p-8">Farmer Dashboard</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, omnis incidunt quasi doloremque voluptatum doloribus aperiam? Rem soluta atque sint officiis! Libero magnam magni itaque, neque cumque eos ducimus cum?
      Ea recusandae in, nulla quidem quasi, aspernatur maiores dignissimos corrupti dolore dolor accusamus velit distinctio cumque nihil quia ad iure reiciendis eum atque, porro libero consequatur! Voluptates obcaecati perspiciatis ut!
      Error quos nulla totam eius sit ab, minus impedit accusantium commodi unde, quisquam reprehenderit excepturi. Eveniet, saepe officia optio non voluptates possimus pariatur impedit ipsum consectetur, consequuntur aut rem vitae?
      Eius odio reiciendis consequatur consequuntur suscipit adipisci voluptas, exercitationem placeat explicabo quasi eos temporibus iure veritatis optio nulla dolore deserunt sed quod sint? Error culpa architecto quos beatae numquam reprehenderit.
      Corrupti facere, aliquam eum natus laborum odio assumenda culpa ab maiores deserunt accusamus dignissimos accusantium necessitatibus dolores dolor, nisi reprehenderit magni? In mollitia ab laudantium, hic repellendus saepe optio enim!
      Fuga suscipit, quisquam quam nostrum dicta facere illo pariatur officiis vel adipisci, sed temporibus repudiandae libero ad illum in dolorum labore quaerat provident quae dolorem sint quas quia! Nesciunt, ipsam.
      Qui modi maiores ad est, aspernatur, natus quam iure cupiditate quo tempora deserunt? Ab sed assumenda facere tempora, explicabo, corporis, eos asperiores rem numquam voluptatem suscipit natus aliquam eveniet. Excepturi!
      Possimus suscipit eveniet nobis! Odio, omnis cum tempore labore eum doloremque ipsa quam distinctio repudiandae natus quasi reiciendis sequi inventore placeat voluptatem quia deserunt voluptate suscipit? Voluptate aliquam perferendis veritatis!
      Debitis officia a molestias, deleniti officiis, rem saepe, vitae incidunt modi ratione dignissimos suscipit quo delectus? Eveniet fugit odit a magni earum est dolores magnam, animi consectetur, fugiat aliquam ea?
      Dicta ex facilis harum, neque perspiciatis ullam. Sunt repellendus dolor, suscipit vitae odio perspiciatis sit pariatur architecto nihil alias voluptate amet? Ab, in quaerat. Quam voluptate corporis nostrum eius tempora.
      Aut eaque ipsam recusandae impedit veritatis cum molestiae quaerat odit veniam sed dicta atque natus, totam vitae expedita minima iure? Alias pariatur, numquam laudantium nulla suscipit aperiam minima ullam fugit.
      Error, exercitationem dolore, ut voluptas recusandae doloribus ipsa vel nulla hic dolor, asperiores officia consequatur enim possimus perspiciatis distinctio quasi dolorem quae alias pariatur repellat laborum quo nostrum. Accusamus, sint?
      Omnis explicabo labore velit ab unde dolor error iure, nam animi recusandae aperiam? Nihil sed iusto dicta recusandae iure sint magni, eum eveniet, libero ex aperiam sunt, quod eaque incidunt?
      Pariatur cumque dicta dolores provident! Atque porro laborum tenetur nulla dolore dignissimos consectetur architecto doloribus minus fugit qui ratione libero doloremque, suscipit exercitationem. Nobis porro assumenda debitis rerum minima harum.
      Unde distinctio exercitationem neque, magni aspernatur excepturi. Quas quasi adipisci assumenda amet temporibus ipsa nulla illo. Fuga enim ad harum laboriosam laudantium iure voluptatem aliquam corrupti quae voluptates, reiciendis quo!
      Praesentium, numquam? Corrupti iste numquam libero quae placeat quasi voluptatum est hic! Corporis animi reprehenderit, harum, quaerat iusto qui autem eos ratione, dolorem dolorum quos ab at quas et reiciendis.
      Praesentium inventore similique adipisci doloremque voluptatem unde quidem amet, aliquam distinctio voluptate eius blanditiis iste totam ipsa, eum nihil in. Autem delectus eum expedita obcaecati vitae, aliquam quasi rerum sit.
      Modi inventore at rerum hic dolore, doloribus accusantium qui quaerat? Reprehenderit minima consectetur natus molestias beatae! Quos commodi quasi molestiae consectetur veritatis culpa, odit unde placeat inventore fuga, ullam possimus?
      Vitae, tempora eaque illo, deserunt soluta in dolorem temporibus voluptatum et, consectetur dignissimos libero non nemo dolore facilis pariatur adipisci ducimus animi obcaecati. Maiores voluptate aliquam, omnis facilis nihil asperiores!
      Explicabo molestiae expedita vel hic et, modi doloribus quam! Ipsam at cumque iste quos amet omnis harum, ut quia sint assumenda, velit molestias voluptatibus facilis. Nisi pariatur consequatur dolores reiciendis.
      Recusandae, non? Ipsum laudantium perspiciatis expedita officia fugit cumque modi error iste inventore quas, vitae eligendi neque minima tempora adipisci quam beatae sit obcaecati ab assumenda nostrum sint minus molestias?
      Sed aperiam quo odio enim eos possimus, ullam dolores, porro ipsam dicta placeat quisquam debitis quos eaque, beatae nihil ea reprehenderit! Unde sit itaque aut, soluta minus modi commodi cumque?
      Distinctio voluptas cupiditate voluptatibus maxime ut quam possimus harum sunt eum corrupti? Nobis dolores ducimus eligendi beatae dolore voluptatibus aliquam aut delectus id earum! Ipsa maxime corrupti accusamus ea blanditiis.
      Hic sit cupiditate quasi molestias dicta voluptatum, ad dolor obcaecati magni dolorem exercitationem reprehenderit asperiores adipisci officiis beatae doloribus, aperiam eligendi. Hic, fugit. Amet asperiores qui laborum vero nemo omnis.
      Ratione praesentium suscipit molestias, atque in mollitia modi minus vel sequi! Fugit esse corporis sit sint recusandae quo nobis assumenda sunt consequuntur iste rem vero, totam voluptatibus ex, quaerat quos.
      Aspernatur quos nostrum autem dolor unde id consequatur, blanditiis quae aperiam esse fugit facilis, alias corporis cupiditate, eaque ullam. Facilis vero perspiciatis velit quis nobis non aliquid ullam illo nostrum.
      Modi cupiditate ab corporis earum mollitia nulla ipsam expedita quaerat molestiae. Ea ipsum nam doloremque, hic quis facilis praesentium nesciunt dignissimos asperiores, consequuntur ipsam obcaecati saepe accusamus! Sit, eaque dolor.
      Et voluptate sed consequuntur alias beatae tempora eum quae vel blanditiis, debitis magnam nam suscipit? Labore, placeat ab explicabo dolores consequuntur eaque cupiditate obcaecati hic quidem sed, at quis ad!
      Totam similique delectus iste animi deserunt quis nulla, quam, minus architecto sapiente recusandae? Natus repudiandae labore, explicabo esse, unde ab animi reiciendis hic quis impedit accusantium consequatur in qui iste?
      Commodi excepturi fugit asperiores corrupti rerum aperiam illo. Hic fugit voluptatem ducimus voluptatum obcaecati sapiente, ipsa quam aut, illum suscipit porro vero nobis, dolor nesciunt beatae voluptas tenetur animi vitae.
      Velit quasi unde architecto! Voluptatem quo non nihil dolores, tenetur fugiat? Nam aut accusantium reiciendis esse similique impedit iusto suscipit dolorem ratione odit nihil beatae, delectus illum! Nam, cupiditate laboriosam?
      Iure error quo nam architecto unde rem aliquam molestiae maxime corrupti velit commodi, voluptatum explicabo numquam doloribus praesentium illo dolorem, ad cupiditate, alias vitae perspiciatis. Blanditiis officia enim nemo incidunt.
      Libero ipsa illum, provident earum iure mollitia, quidem tempora ipsum beatae nulla, omnis placeat. Quia, repellendus fuga debitis, facere ab deserunt a qui nesciunt beatae fugiat ipsa odit dolor esse?
      Dicta impedit ipsam nihil quod itaque quidem voluptatem beatae inventore nisi, vel quasi laudantium! Quae, repellat atque dignissimos possimus, ullam consequatur perferendis dicta totam quisquam quam mollitia nemo voluptate tempora.
      Placeat excepturi quis nisi soluta eius? Architecto illum voluptate voluptas in, accusantium ducimus alias hic pariatur sunt. Sunt fugiat quod quam ipsa aliquam. Nesciunt, quae omnis eaque nisi accusamus dignissimos!
      Corrupti maiores quod porro. Magnam nostrum sunt, quia, natus, sed dolores ad autem fugit eum sint ratione esse quis! Quod earum suscipit nostrum, in reprehenderit esse fugit corrupti velit facilis.
      Debitis dicta beatae eos ea quam aliquid dolor vitae quaerat repellat, libero accusantium, culpa quo ipsa, architecto illum asperiores enim cum deleniti incidunt eum soluta minus iusto quibusdam eveniet? Ducimus.
      Laudantium, veritatis corporis! Id non, deserunt neque est quam nihil eaque! Suscipit, nobis laudantium tempore ipsam assumenda ut totam perferendis ea, laboriosam eum repellendus voluptatibus aperiam corporis soluta repellat necessitatibus.
      Sit sequi neque doloremque magni iure ipsam illum et dolores, aliquid similique eum provident cumque cum minus. Facere numquam assumenda aut optio maxime cumque, ex ad totam laborum natus. Ipsa.
      Porro, aspernatur perspiciatis explicabo illum facilis fuga sed est temporibus ullam. Maiores laborum architecto fuga, ullam perspiciatis omnis unde fugit quasi quaerat accusantium enim ducimus officiis neque autem provident. Temporibus.
      Fuga distinctio impedit accusamus repellat iste, similique inventore voluptatum error laudantium saepe rem ea accusantium hic officiis necessitatibus possimus incidunt ex! Quo, animi vel? Voluptatem quod consequuntur dolorem a tempora!
      Sed assumenda atque, nihil architecto voluptatum facere at dolorum fugiat veniam rem quod voluptatibus incidunt excepturi dignissimos aspernatur labore tempora unde est praesentium. Iusto fuga in aut ducimus alias nostrum?
      Odio repudiandae officiis fuga a sapiente doloremque tempore ab deleniti iusto! Labore praesentium excepturi, laudantium officiis, eius inventore ipsam quos nam debitis quidem cumque illo sequi in dolore doloremque odit.
      Tenetur perferendis fugit necessitatibus impedit modi id provident dolorem! Sunt autem aperiam expedita, eveniet ipsum provident molestias a dolores. Eligendi unde expedita quia omnis quasi! Magni nobis vitae enim accusantium.
      Obcaecati eius consequatur magni vitae dolorum voluptas impedit est reprehenderit recusandae totam mollitia iste delectus odit cum vel, accusamus ullam molestias officia quam placeat id molestiae? Unde quisquam velit sunt.</p>
      {/* Farmer-specific content */}
    </div>
  );
}