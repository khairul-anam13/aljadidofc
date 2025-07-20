import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/ui/page-header"
import { constructMetadata } from "@/components/seo/metadata"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, Eye } from "lucide-react"

export const metadata: Metadata = constructMetadata({
  title: "Galeri - Al Jadid Offset",
  description: "Lihat portofolio dan hasil karya percetakan Al Jadid Offset. Berbagai produk cetak berkualitas tinggi.",
})

export default function GalleryPage() {
  const categories = ["Semua", "Kartu Nama", "Brosur", "Banner", "Kemasan", "Undangan"]

  const galleryItems = [
    {
      id: 1,
      title: "Kartu Nama Perusahaan",
      category: "Kartu Nama",
      image: "/placeholder.svg?height=600&width=600&text=Kartu+Nama+1",
      client: "PT Maju Bersama",
      likes: 124,
      views: 1250,
    },
    {
      id: 2,
      title: "Brosur Produk",
      category: "Brosur",
      image: "/placeholder.svg?height=600&width=600&text=Brosur+1",
      client: "CV Karya Mandiri",
      likes: 89,
      views: 890,
    },
    {
      id: 3,
      title: "Banner Promosi",
      category: "Banner",
      image: "/placeholder.svg?height=600&width=600&text=Banner+1",
      client: "Toko Elektronik Jaya",
      likes: 156,
      views: 1560,
    },
    {
      id: 4,
      title: "Kemasan Produk Makanan",
      category: "Kemasan",
      image: "/placeholder.svg?height=600&width=600&text=Kemasan+1",
      client: "Bakery Delicious",
      likes: 203,
      views: 2030,
    },
    {
      id: 5,
      title: "Undangan Pernikahan",
      category: "Undangan",
      image: "/placeholder.svg?height=600&width=600&text=Undangan+1",
      client: "Keluarga Ahmad",
      likes: 312,
      views: 3120,
    },
    {
      id: 6,
      title: "Kartu Nama Dokter",
      category: "Kartu Nama",
      image: "/placeholder.svg?height=600&width=600&text=Kartu+Nama+2",
      client: "Dr. Siti Rahayu",
      likes: 67,
      views: 670,
    },
    {
      id: 7,
      title: "Brosur Event",
      category: "Brosur",
      image: "/placeholder.svg?height=600&width=600&text=Brosur+2",
      client: "Event Organizer Spektakuler",
      likes: 98,
      views: 980,
    },
    {
      id: 8,
      title: "Banner Toko",
      category: "Banner",
      image: "/placeholder.svg?height=600&width=600&text=Banner+2",
      client: "Supermarket Hemat",
      likes: 145,
      views: 1450,
    },
    {
      id: 9,
      title: "Kemasan Kosmetik",
      category: "Kemasan",
      image: "/placeholder.svg?height=600&width=600&text=Kemasan+2",
      client: "Beauty Care Indonesia",
      likes: 234,
      views: 2340,
    },
    {
      id: 10,
      title: "Undangan Ulang Tahun",
      category: "Undangan",
      image: "/placeholder.svg?height=600&width=600&text=Undangan+2",
      client: "Keluarga Budi",
      likes: 178,
      views: 1780,
    },
    {
      id: 11,
      title: "Kartu Nama Kreatif",
      category: "Kartu Nama",
      image: "/placeholder.svg?height=600&width=600&text=Kartu+Nama+3",
      client: "Studio Desain Kreasi",
      likes: 289,
      views: 2890,
    },
    {
      id: 12,
      title: "Brosur Properti",
      category: "Brosur",
      image: "/placeholder.svg?height=600&width=600&text=Brosur+3",
      client: "PT Properti Sejahtera",
      likes: 156,
      views: 1560,
    },
  ]

  return (
    <>
      {/* Header */}
      <PageHeader title="Galeri" description="Portofolio dan hasil karya percetakan kami" />

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container">
          <Tabs defaultValue="Semua" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-1 p-1 bg-muted/50 rounded-lg">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="text-xs md:text-sm px-2 md:px-3 py-2 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                  {galleryItems
                    .filter((item) => category === "Semua" || item.category === category)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="group relative overflow-hidden rounded-xl aspect-square hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-b from-background to-muted/20"
                      >
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-between p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {/* Top Actions */}
                          <div className="flex justify-end gap-2">
                            <button className="bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-background transition-colors">
                              <Heart className="h-3 w-3 md:h-4 md:w-4" />
                            </button>
                            <button className="bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-background transition-colors">
                              <Eye className="h-3 w-3 md:h-4 md:w-4" />
                            </button>
                          </div>

                          {/* Bottom Info */}
                          <div className="text-white space-y-1 md:space-y-2">
                            <h3 className="font-semibold text-sm md:text-base line-clamp-1">{item.title}</h3>
                            <p className="text-xs md:text-sm text-white/80 line-clamp-1">{item.client}</p>
                            <div className="flex items-center gap-3 text-xs">
                              <div className="flex items-center gap-1">
                                <Heart className="h-3 w-3 fill-red-500 text-red-500" />
                                <span>{item.likes}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                <span>{item.views}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="section-padding bg-gradient-to-r from-muted/50 to-muted/30">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              Testimoni Klien
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
              Apa Kata Klien Kami Tentang <span className="text-secondary">Hasil Karya</span> Al Jadid Offset
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
              Pendapat dari klien yang telah menggunakan jasa percetakan kami dan merasakan kualitas hasil cetak terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Hasil cetak kartu nama kami sangat memuaskan. Kualitas cetakan sangat bagus dan pengirimannya tepat waktu.",
                author: "Budi Santoso",
                company: "PT Maju Bersama",
                image: "/placeholder.svg?height=100&width=100&text=BS",
                rating: 5,
              },
              {
                quote:
                  "Desain dan hasil cetak brosur kami sangat profesional. Tim Al Jadid Offset sangat membantu dalam proses desain hingga pencetakan.",
                author: "Siti Rahayu",
                company: "CV Karya Mandiri",
                image: "/placeholder.svg?height=100&width=100&text=SR",
                rating: 5,
              },
              {
                quote:
                  "Banner untuk event kami mendapat banyak pujian dari pengunjung. Kualitas cetakan dan warnanya sangat hidup.",
                author: "Ahmad Fauzi",
                company: "Event Organizer Spektakuler",
                image: "/placeholder.svg?height=100&width=100&text=AF",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm md:text-base italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-sm md:text-base">{testimonial.author}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl shadow-xl p-8 md:p-12 text-center border relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                ✨ Konsultasi Gratis
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                Ingin Hasil Cetak <span className="text-primary">Berkualitas</span>?
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Hubungi kami sekarang untuk mendapatkan hasil cetak terbaik untuk kebutuhan Anda. Tim ahli kami siap
                membantu mewujudkan ide kreatif Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-sm md:text-base shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-sm md:text-base shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link href="/products">Lihat Produk</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
