let contactscreen=document.querySelector("main .contact");
contactscreen.style.display="none";
let productscreen=document.querySelector("main .product")
// productscreen.style.display="none"

let btn_contact=document.querySelector("header .box nav ul li a.contact")
let btn_contact2=document.querySelector("header .box a .logo")
let btn_product=document.querySelector("header .box nav ul li a.product")

let btn_product2=document.querySelector("main .contact .box div.list")


function showContact(){
    contactscreen.style.display="flex";
    productscreen.style.display="none"
}

function  showProduct(){
    contactscreen.style.display="none";
    productscreen.style.display="flex"
}

btn_contact.addEventListener("click",function(){
    showContact();
})
btn_contact2.addEventListener("click",function(){
    showContact();
})

btn_product.addEventListener("click",function(){
    showProduct()
})
btn_product2.addEventListener("click",function(){
    showProduct()
})


 // Nomor WhatsApp tujuan (format internasional tanpa +, spasi, atau tanda hubung)
//   const nomorWA = "6281234567890";
  const nomorWA = "6285274948457";

  // Seleksi semua tombol dengan class .btn-order
  const buttons = document.querySelectorAll(".btn-order");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Cari parent container .item
      const item = button.closest(".item");

      // Ambil nama produk dan harga dari elemen di dalam item
      const namaProduk = item.querySelector(".name").textContent.trim();
      const hargaProduk = item.querySelector(".price").textContent.trim();

      // Susun pesan otomatis
      const pesan = `Halo, saya ingin pesan produk:\n${namaProduk}\nDengan harga: ${hargaProduk}`;

      // Encode pesan agar aman di URL
      const encodedPesan = encodeURIComponent(pesan);

      // Buat link WhatsApp
      const url = `https://wa.me/${nomorWA}?text=${encodedPesan}`;

      // Buka link di tab baru
      window.open(url, "_blank");
    });
  });
