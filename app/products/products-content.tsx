"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/ui/page-header"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Eye } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
}

export default function ProductsContent() {
  const categories = ["Semua", "Bisnis", "Marketing", "Promosi", "Personal"]
  const [activeCategory, setActiveCategory] = useState("Semua")

  const products = [
    {
      id: 1,
      name: "Cetak MMT",
      description: "Banner MMT berkualitas tinggi untuk promosi outdoor dan indoor di Karanganyar",
      image: "/placeholder.svg?height=400&width=600&text=Cetak+MMT",
      category: "Promosi",
      price: "Rp 25.000/m²",
      originalPrice: "Rp 35.000/m²",
      rating: 4.8,
      reviews: 124,
      isPopular: true,
      details: [
        "Bahan MMT Korea 440gsm",
        "Full color outdoor quality",
        "Tahan cuaca dan UV",
        "Finishing mata ayam gratis",
        "Minimum order 2m²",
      ],
    },
    {
      id: 2,
      name: "Cetak Sticker",
      description: "Sticker vinyl, chromo, dan transparant dengan cutting presisi untuk kebutuhan Karanganyar",
      image: "/placeholder.svg?height=400&width=600&text=Cetak+Sticker",
      category: "Promosi",
      price: "Rp 15.000/lembar",
      rating: 4.9,
      reviews: 89,
      details: [
        "Bahan vinyl, chromo, transparant",
        "Cutting sesuai bentuk",
        "Laminating glossy/doff",
        "Tahan air dan panas",
        "Minimum order 50 pcs",
      ],
    },
    {
      id: 3,
      name: "Cetak Buku",
      description: "Percetakan buku, majalah, dan publikasi dengan kualitas offset terbaik di Karanganyar",
      image: "/placeholder.svg?height=400&width=600&text=Cetak+Buku",
      category: "Bisnis",
      price: "Rp 8.000/eksemplar",
      rating: 4.7,
      reviews: 156,
      isNew: true,
      details: [
        "Kertas HVS 70gsm/80gsm",
        "Cover art paper 260gsm",
        "Binding perfect/spiral",
        "Full color atau hitam putih",
        "Minimum order 50 eksemplar",
      ],
    },
    {
      id: 4,
      name: "Sampul Rapot",
      description: "Sampul rapot sekolah custom dengan desain menarik untuk sekolah di Karanganyar",
      image: "/placeholder.svg?height=400&width=600&text=Sampul+Rapot",
      category: "Personal",
      price: "Rp 3.500/pcs",
      rating: 4.6,
      reviews: 67,
      isPopular: true,
      details: [
        "Kertas art carton 260gsm",
        "Desain custom sekolah",
        "Laminasi doff/glossy",
        "Logo sekolah included",
        "Minimum order 100 pcs",
      ],
    },
    {
      id: 5,
      name: "Kartu Nama",
      description: "Kartu nama profesional dengan berbagai pilihan kertas dan finishing premium",
      image: "/placeholder.svg?height=400&width=600&text=Kartu+Nama",
      category: "Bisnis",
      price: "Rp 100.000/box",
      rating: 4.8,
      reviews: 203,
      details: [
        "Ukuran standar 9 x 5.5 cm",
        "Kertas ivory 260gsm",
        "Full color 2 sisi",
        "Finishing laminasi",
        "1 box = 100 pcs",
      ],
    },
    {
      id: 6,
      name: "Brosur Premium",
      description: "Brosur full color dengan kualitas cetak tinggi dan berbagai ukuran",
      image: "/placeholder.svg?height=400&width=600&text=Brosur",
      category: "Marketing",
      price: "Rp 2.500/lembar",
      rating: 4.9,
      reviews: 312,
      details: [
        "Ukuran A4/A5/A6",
        "Kertas art paper 150gsm",
        "Full color 2 sisi",
        "Lipat 2/3 (opsional)",
        "Minimum order 100 pcs",
      ],
    },
    {
      id: 7,
      name: "X-Banner",
      description: "X-Banner premium dengan stand kokoh untuk promosi profesional",
      image: "/placeholder.svg?height=400&width=600&text=X-Banner",
      category: "Promosi",
      price: "Rp 180.000/unit",
      rating: 4.7,
      reviews: 98,
      details: ["Ukuran 60 x 160 cm", "Bahan flexi korea 440gsm", "Full color", "Termasuk stand", "Siap pakai"],
    },
    {
      id: 8,
      name: "Kop Surat",
      description: "Kop surat berkualitas tinggi untuk kebutuhan bisnis dan perusahaan",
      image: "/placeholder.svg?height=400&width=600&text=Kop+Surat",
      category: "Bisnis",
      price: "Rp 300.000/rim",
      rating: 4.5,
      reviews: 45,
      details: ["Ukuran A4", "Kertas HVS 80gsm", "Full color", "1 rim = 500 lembar", "Desain included"],
    },
  ]

  return (
    <>
      {/* Header */}
      <PageHeader
        title="Produk & Layanan Percetakan Karanganyar"
        description="Temukan solusi percetakan terbaik untuk kebutuhan Anda di Karanganyar"
      />

      {/* Products Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="container relative">
          <Tabs defaultValue="Semua" className="w-full" onValueChange={(value) => setActiveCategory(value)}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <TabsList className="glass-effect rounded-lg p-1">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <TabsTrigger
                      value={category}
                      className="text-xs md:text-sm px-3 py-2 rounded-md data-[state=active]:bg-primary/80 data-[state=active]:backdrop-blur-sm data-[state=active]:text-primary-foreground transition-all"
                    >
                      {category}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </motion.div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                  {products
                    .filter((product) => category === "Semua" || product.category === category)
                    .map((product, index) => (
                      <motion.div
                        key={product.id}
                        custom={index}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        layout
                      >
                        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] glass-effect">
                          <div className="relative">
                            {/* Product Image */}
                            <div className="aspect-square relative overflow-hidden">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Badges */}
                            <div className="absolute top-2 left-2 flex flex-col gap-1">
                              {product.isPopular && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.2 + index * 0.05 }}
                                  className="glass-effect text-secondary text-xs px-2 py-1 rounded-full shadow-md"
                                >
                                  Popular
                                </motion.div>
                              )}
                              {product.isNew && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.2 + index * 0.05 }}
                                  className="glass-effect text-accent text-xs px-2 py-1 rounded-full shadow-md"
                                >
                                  New
                                </motion.div>
                              )}
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-2 right-2">
                              <Badge variant="outline" className="text-xs glass-effect">
                                {product.category}
                              </Badge>
                            </div>

                            {/* Quick View Button */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute bottom-2 right-2 transition-opacity duration-300"
                            >
                              <Button
                                size="sm"
                                variant="secondary"
                                className="h-8 w-8 p-0 rounded-full shadow-lg glass-effect"
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </motion.div>
                          </div>

                          <CardHeader className="p-3 md:p-4 pb-2">
                            <CardTitle className="text-sm md:text-base font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                              {product.name}
                            </CardTitle>
                            <CardDescription className="text-xs md:text-sm line-clamp-2 text-muted-foreground">
                              {product.description}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="p-3 md:p-4 pt-0 space-y-3">
                            {/* Rating */}
                            <div className="flex items-center gap-1">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < Math.floor(product.rating)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {product.rating} ({product.reviews})
                              </span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-primary text-sm md:text-base">{product.price}</span>
                              {product.originalPrice && (
                                <span className="text-xs text-muted-foreground line-through">
                                  {product.originalPrice}
                                </span>
                              )}
                            </div>

                            {/* Specifications (Hidden on mobile, shown on hover for desktop) */}
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              whileHover={{ opacity: 1, height: "auto" }}
                              className="hidden md:block overflow-hidden transition-all duration-300"
                            >
                              <div className="pt-2 border-t">
                                <h4 className="text-xs font-semibold mb-1">Spesifikasi:</h4>
                                <ul className="text-xs space-y-0.5 list-disc pl-3 text-muted-foreground">
                                  {product.details.slice(0, 3).map((detail, index) => (
                                    <li key={index} className="line-clamp-1">
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 md:p-12 text-center animate-pulse-glow"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block glass-effect px-4 py-2 rounded-full text-sm font-medium"
              >
                Konsultasi Gratis Percetakan Karanganyar
              </motion.div>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter"
              >
                Butuh Produk Percetakan <span className="text-primary">Kustom</span>?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="max-w-2xl mx-auto text-muted-foreground"
              >
                Tim Al Jadid Offset Karanganyar siap membantu mewujudkan kebutuhan cetak MMT, cetak sticker, cetak buku,
                dan sampul rapot sesuai spesifikasi Anda.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <Button asChild size="lg" className="glass-button text-sm md:text-base">
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="glass-effect text-sm md:text-base">
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 90 90"
                      fill="none"
                      className="mr-2"
                    >
                      <path
                        d="M90 43.841C90 68.066 70.562 87.5 46.352 87.5C38.437 87.5 30.93 85.5 24.375 81.96L0 90L8.325 66.5C4.125 59.75 1.875 51.98 1.875 43.841C1.875 19.58 21.3 0 46.352 0C70.562 0 90 19.58 90 43.841ZM46.352 6.956C25.313 6.956 8.85 23.381 8.85 43.841C8.85 51.86 11.438 59.736 16.275 66.195L11.25 80.044L25.65 75.094C31.8 79.344 38.775 81.694 46.352 81.694C67.387 81.694 83.85 65.27 83.85 44.81C83.85 24.351 67.387 6.956 46.352 6.956ZM68.775 53.666C68.4 53.666 67.65 53.666 67.275 53.291C66.525 53.291 66.15 52.916 65.025 52.541C64.275 52.166 62.775 51.416 61.65 51.041C61.275 50.666 60.525 50.666 60.15 50.666C59.4 50.666 59.025 51.041 58.65 51.416C58.275 51.791 57.15 52.916 56.775 53.291C56.4 53.666 56.025 53.666 55.65 53.291C55.275 53.291 54.15 52.916 52.65 52.166C51.15 51.416 49.65 50.291 48.525 48.791C48.15 48.041 47.4 47.291 47.025 46.541C46.65 46.166 46.65 45.791 47.025 45.416C47.025 45.041 47.4 44.666 47.775 44.291C47.775 44.291 48.15 43.916 48.15 43.541C48.525 43.166 48.525 42.791 48.525 42.416C48.525 42.041 48.15 41.291 47.775 40.916C47.4 40.541 46.275 38.291 45.9 37.541C45.525 36.416 45.15 36.416 44.775 36.416H43.65C43.275 36.416 42.525 36.416 41.775 37.166C41.4 37.541 40.275 38.666 40.275 40.916C40.275 43.166 41.775 45.416 42.15 45.791C42.525 46.166 47.025 53.291 54.15 56.291C55.275 56.666 56.4 57.041 57.15 57.416C58.65 57.791 59.775 57.791 60.9 57.416C62.025 57.041 63.9 56.291 64.275 55.166C64.65 54.041 64.65 53.291 64.275 52.916C64.275 52.916 63.9 52.541 63.15 52.541C62.775 53.291 69.525 53.666 68.775 53.666Z"
                        fill="currentColor"
                      />
                    </svg>
                    WhatsApp
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
