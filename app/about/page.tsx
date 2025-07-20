import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeaderStatic } from "@/components/ui/page-header-static"
import { constructMetadata } from "@/components/seo/metadata"

export const metadata: Metadata = constructMetadata({
  title: "Tentang Al Jadid Offset - Percetakan Karanganyar Terpercaya",
  description:
    "Sejarah Al Jadid Offset sebagai percetakan terpercaya di Karanganyar sejak 2005. Spesialis cetak MMT, cetak sticker, cetak buku, dan sampul rapot dengan kualitas terbaik.",
  keywords: [
    "tentang al jadid offset",
    "sejarah percetakan karanganyar",
    "percetakan terpercaya karanganyar",
    "percetakan al jadid karanganyar",
    "visi misi percetakan",
    "tim percetakan profesional",
  ],
  canonical: "/about",
})

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <PageHeaderStatic title="Tentang Al Jadid Offset" description="Percetakan terpercaya di Karanganyar sejak 2005" />

      {/* Company History */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="heading-md">Sejarah Percetakan Al Jadid Karanganyar</h2>
              <div className="space-y-4 text-responsive text-muted-foreground">
                <p>
                  <strong>Al Jadid Offset</strong> didirikan pada tahun 2005 di Karanganyar sebagai percetakan yang
                  mengkhususkan diri dalam layanan <strong>cetak MMT</strong>, <strong>cetak sticker</strong>,
                  <strong>cetak buku</strong>, dan <strong>sampul rapot</strong> berkualitas tinggi.
                </p>
                <p>
                  Berawal dari sebuah usaha kecil di Karanganyar dengan fokus pada kualitas dan kepuasan pelanggan, kami
                  telah berkembang menjadi <strong>percetakan terpercaya di Karanganyar</strong> yang melayani berbagai
                  kebutuhan percetakan untuk sekolah, bisnis, dan instansi pemerintah.
                </p>
                <p>
                  Selama lebih dari 18 tahun beroperasi di Karanganyar, Al Jadid Offset telah menjadi pilihan utama
                  untuk layanan <strong>sampul rapot Karanganyar</strong> dan berbagai produk percetakan lainnya dengan
                  standar kualitas internasional.
                </p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Percetakan+Al+Jadid+Karanganyar"
                alt="Percetakan Al Jadid Offset Karanganyar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-padding bg-muted/40">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            <h2 className="heading-md mb-4">Layanan Unggulan Percetakan Karanganyar</h2>
            <p className="text-responsive text-muted-foreground">
              Al Jadid Offset Karanganyar mengkhususkan diri dalam berbagai layanan percetakan berkualitas
            </p>
          </div>
          <div className="grid-responsive-4 max-w-5xl mx-auto">
            {[
              {
                title: "Cetak MMT",
                description: "Banner dan spanduk MMT berkualitas tinggi untuk promosi outdoor",
                icon: "🖨️",
              },
              {
                title: "Cetak Sticker",
                description: "Sticker vinyl, chromo, dan transparant dengan cutting presisi",
                icon: "🏷️",
              },
              {
                title: "Cetak Buku",
                description: "Percetakan buku, majalah, dan publikasi dengan binding rapi",
                icon: "📚",
              },
              {
                title: "Sampul Rapot",
                description: "Sampul rapot sekolah dengan desain custom dan material berkualitas",
                icon: "📋",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center glass-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-semibold text-responsive mb-2">{service.title}</h3>
                  <p className="text-responsive-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            <h2 className="heading-md">Visi & Misi</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="glass-card">
              <CardContent className="p-6 sm:p-8">
                <h3 className="heading-sm mb-4">Visi</h3>
                <p className="text-responsive text-muted-foreground">
                  Menjadi <strong>percetakan terdepan di Karanganyar</strong> yang dikenal karena kualitas, inovasi, dan
                  pelayanan prima dalam memenuhi kebutuhan cetak MMT, cetak sticker, cetak buku, dan sampul rapot.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 sm:p-8">
                <h3 className="heading-sm mb-4">Misi</h3>
                <ul className="space-y-2 text-responsive text-muted-foreground list-disc pl-5">
                  <li>Menyediakan layanan percetakan berkualitas tinggi dengan harga kompetitif di Karanganyar</li>
                  <li>Mengutamakan kepuasan pelanggan dalam setiap layanan cetak MMT, sticker, dan buku</li>
                  <li>Menjadi mitra terpercaya untuk kebutuhan sampul rapot sekolah-sekolah di Karanganyar</li>
                  <li>Terus berinovasi dengan teknologi percetakan modern untuk hasil optimal</li>
                  <li>Menjalankan bisnis dengan praktik ramah lingkungan dan berkelanjutan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-muted/40">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            <h2 className="heading-md mb-4">Tim Profesional Kami</h2>
            <p className="text-responsive text-muted-foreground">
              Didukung oleh tim berpengalaman di bidang percetakan Karanganyar
            </p>
          </div>
          <div className="grid-responsive-4 max-w-4xl mx-auto">
            {[
              { name: "Ahmad Fauzi", position: "Direktur", image: "Direktur" },
              { name: "Siti Aminah", position: "Manajer Operasional", image: "Manajer" },
              { name: "Budi Santoso", position: "Kepala Desainer", image: "Desainer" },
              { name: "Dewi Lestari", position: "Manajer Pemasaran", image: "Marketing" },
            ].map((person, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={`/placeholder.svg?height=96&width=96&text=${person.image}`}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h3 className="font-semibold text-responsive">{person.name}</h3>
                <p className="text-responsive-sm text-muted-foreground">{person.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            <h2 className="heading-md mb-4">Melayani Wilayah Karanganyar dan Sekitarnya</h2>
            <p className="text-responsive text-muted-foreground">
              Al Jadid Offset melayani kebutuhan percetakan di Karanganyar, Solo, Surakarta, dan wilayah sekitarnya
              dengan layanan antar gratis untuk order dalam jumlah tertentu.
            </p>
          </div>

          <div className="grid-responsive-3 max-w-4xl mx-auto">
            <Card className="text-center glass-card">
              <CardContent className="p-6">
                <h3 className="font-bold heading-sm mb-2">Karanganyar</h3>
                <p className="text-responsive-sm text-muted-foreground">
                  Melayani seluruh wilayah Karanganyar untuk cetak MMT, sticker, buku, dan sampul rapot
                </p>
              </CardContent>
            </Card>
            <Card className="text-center glass-card">
              <CardContent className="p-6">
                <h3 className="font-bold heading-sm mb-2">Solo & Surakarta</h3>
                <p className="text-responsive-sm text-muted-foreground">
                  Jangkauan layanan hingga Solo dan Surakarta dengan kualitas terjamin
                </p>
              </CardContent>
            </Card>
            <Card className="text-center glass-card">
              <CardContent className="p-6">
                <h3 className="font-bold heading-sm mb-2">Wilayah Sekitar</h3>
                <p className="text-responsive-sm text-muted-foreground">
                  Melayani juga wilayah sekitar Karanganyar dengan layanan antar khusus
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
