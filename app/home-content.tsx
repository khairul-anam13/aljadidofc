"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  FileText,
  ImageIcon,
  Sticker,
  GraduationCap,
  Trophy,
  Heart,
  Shirt,
  ShoppingBag,
  MoreHorizontal,
} from "lucide-react"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
}

export default function HomeContent() {
  const services = [
    {
      title: "Cetak Kertas",
      description: "Dokumen, formulir, dan berbagai kebutuhan cetak kertas",
      icon: FileText,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      title: "Cetak MMT/Banner",
      description: "Banner promosi outdoor dan indoor berkualitas tinggi",
      icon: ImageIcon,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/30",
    },
    {
      title: "Cetak Sticker",
      description: "Sticker vinyl, chromo, dan transparant custom",
      icon: Sticker,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
    },
    {
      title: "Sampul Rapot",
      description: "Sampul rapot sekolah dengan desain menarik",
      icon: GraduationCap,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
    },
    {
      title: "Pembuatan Piala",
      description: "Piala trophy untuk berbagai event dan kompetisi",
      icon: Trophy,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
    },
    {
      title: "Undangan Pernikahan",
      description: "Undangan pernikahan elegan dan berkelas",
      icon: Heart,
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/30",
    },
    {
      title: "Sablon Kaos",
      description: "Sablon kaos custom dengan kualitas terbaik",
      icon: Shirt,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    },
    {
      title: "Sablon Tas",
      description: "Sablon tas promosi dan souvenir berkualitas",
      icon: ShoppingBag,
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-950/30",
    },
    {
      title: "Dan Masih Banyak Lagi",
      description: "Konsultasi untuk kebutuhan percetakan lainnya",
      icon: MoreHorizontal,
      color: "text-gray-500",
      bgColor: "bg-gray-50 dark:bg-gray-950/30",
    },
  ]

  const stats = [
    { number: "18+", label: "Tahun Pengalaman", icon: Award },
    { number: "5000+", label: "Pelanggan Puas", icon: Users },
    { number: "50000+", label: "Produk Tercetak", icon: CheckCircle },
    { number: "24", label: "Jam Layanan", icon: Clock },
  ]

  const testimonials = [
    {
      name: "Budi Santoso",
      company: "SD Negeri 1 Karanganyar",
      text: "Sampul rapot dari Al Jadid Offset sangat berkualitas. Desainnya menarik dan harganya terjangkau untuk sekolah.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=BS",
    },
    {
      name: "Siti Rahayu",
      company: "Toko Elektronik Jaya",
      text: "Banner MMT untuk toko kami hasilnya sangat bagus. Warnanya tajam dan tahan lama meski di outdoor.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=SR",
    },
    {
      name: "Ahmad Fauzi",
      company: "CV Maju Bersama",
      text: "Sablon kaos untuk event perusahaan kami sangat memuaskan. Kualitas sablon awet dan tidak mudah luntur.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&text=AF",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Floating Elements - responsive sizing */}
        <div className="absolute top-10 sm:top-16 md:top-20 right-[5%] sm:right-[10%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-primary/10 blur-2xl md:blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-[5%] sm:left-[10%] w-36 h-36 sm:w-54 sm:h-54 md:w-72 md:h-72 rounded-full bg-secondary/10 blur-2xl md:blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block glass-effect px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium"
            >
              ✨ Percetakan Terpercaya di Karanganyar Sejak 2005
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="heading-xl text-balance"
            >
              <span className="text-primary">Al Jadid Offset</span>
              <br />
              Percetakan Karanganyar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-responsive text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance"
            >
              Melayani <strong>cetak kertas</strong>, <strong>cetak MMT/banner</strong>, <strong>cetak sticker</strong>,{" "}
              <strong>sampul rapot</strong>, <strong>pembuatan piala</strong>, <strong>undangan pernikahan</strong>,{" "}
              <strong>sablon kaos</strong>, <strong>sablon tas</strong>, dan masih banyak lagi di Karanganyar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6"
            >
              <Button asChild size="lg" className="glass-button text-responsive shadow-xl hover:shadow-2xl">
                <Link href="/products">
                  Lihat Produk Kami
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="glass-effect text-responsive shadow-xl hover:shadow-2xl"
              >
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 90 90"
                    fill="none"
                    className="mr-2 sm:w-5 sm:h-5"
                  >
                    <path
                      d="M90 43.841C90 68.066 70.562 87.5 46.352 87.5C38.437 87.5 30.93 85.5 24.375 81.96L0 90L8.325 66.5C4.125 59.75 1.875 51.98 1.875 43.841C1.875 19.58 21.3 0 46.352 0C70.562 0 90 19.58 90 43.841ZM46.352 6.956C25.313 6.956 8.85 23.381 8.85 43.841C8.85 51.86 11.438 59.736 16.275 66.195L11.25 80.044L25.65 75.094C31.8 79.344 38.775 81.694 46.352 81.694C67.387 81.694 83.85 65.27 83.85 44.81C83.85 24.351 67.387 6.956 46.352 6.956ZM68.775 53.666C68.4 53.666 67.65 53.666 67.275 53.291C66.525 53.291 66.15 52.916 65.025 52.541C64.275 52.166 62.775 51.416 61.65 51.041C61.275 50.666 60.525 50.666 60.15 50.666C59.4 50.666 59.025 51.041 58.65 51.416C58.275 51.791 57.15 52.916 56.775 53.291C56.4 53.666 56.025 53.666 55.65 53.291C55.275 53.291 54.15 52.916 52.65 52.166C51.15 51.416 49.65 50.291 48.525 48.791C48.15 48.041 47.4 47.291 47.025 46.541C46.65 46.166 46.65 45.791 47.025 45.416C47.025 45.041 47.4 44.666 47.775 44.291C47.775 44.291 48.15 43.916 48.15 43.541C48.525 43.166 48.525 42.791 48.525 42.416C48.525 42.041 48.15 41.291 47.775 40.916C47.4 40.541 46.275 38.291 45.9 37.541C45.525 36.416 45.15 36.416 44.775 36.416H43.65C43.275 36.416 42.525 36.416 41.775 37.166C41.4 37.541 40.275 38.666 40.275 40.916C40.275 43.166 41.775 45.416 42.15 45.791C42.525 46.166 47.025 53.291 54.15 56.291C55.275 56.666 56.4 57.041 57.15 57.416C58.65 57.791 59.775 57.791 60.9 57.416C62.025 57.041 63.9 56.291 64.275 55.166C64.65 54.041 64.65 53.291 64.275 52.916C64.275 52.916 63.9 52.541 63.15 52.541C62.775 53.291 69.525 53.666 68.775 53.666Z"
                      fill="currentColor"
                    />
                  </svg>
                  Konsultasi Gratis
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="grid-responsive-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Card className="glass-effect hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto"
          >
            <div className="inline-block glass-effect px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Layanan Unggulan
            </div>
            <h2 className="heading-md mb-3 sm:mb-4 text-balance">
              Layanan Percetakan <span className="text-primary">Terlengkap</span> di Karanganyar
            </h2>
            <p className="text-responsive text-muted-foreground text-balance">
              Kami menyediakan berbagai layanan percetakan dan sablon berkualitas tinggi untuk memenuhi semua kebutuhan
              Anda
            </p>
          </motion.div>

          {/* Services Grid - responsive layout */}
          <div className="grid-responsive-5 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="glass-effect hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full group">
                    <CardContent className="p-3 sm:p-4 md:p-6 text-center space-y-2 sm:space-y-3">
                      {/* Icon with background */}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto rounded-xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 ${service.color}`} />
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-xs sm:text-sm md:text-base leading-tight">{service.title}</h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-6 sm:mt-8"
          >
            <Button asChild size="lg" className="glass-button">
              <Link href="/products">
                Lihat Semua Layanan
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block glass-effect px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Mengapa Memilih Kami?
              </div>
              <h2 className="heading-md mb-4 sm:mb-6 text-balance">
                Percetakan <span className="text-primary">Terpercaya</span> di Karanganyar
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Pengalaman lebih dari 18 tahun di bidang percetakan dan sablon",
                  "Teknologi cetak modern dengan hasil berkualitas tinggi",
                  "Harga kompetitif dan transparan tanpa biaya tersembunyi",
                  "Layanan konsultasi gratis dan desain custom",
                  "Pengiriman cepat dan tepat waktu ke seluruh Karanganyar",
                  "Tim profesional yang berpengalaman dan ramah",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-responsive-sm text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="pt-4 sm:pt-6">
                <Button asChild size="lg" className="glass-button">
                  <Link href="/about">Pelajari Lebih Lanjut</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square relative overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Percetakan+Al+Jadid+Karanganyar"
                  alt="Percetakan Al Jadid Offset Karanganyar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 glass-effect rounded-xl p-3 sm:p-4 shadow-xl">
                <div className="text-lg sm:text-2xl font-bold text-primary">18+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Tahun Pengalaman</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto"
          >
            <div className="inline-block glass-effect px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Testimoni Pelanggan
            </div>
            <h2 className="heading-md mb-3 sm:mb-4 text-balance">
              Apa Kata <span className="text-primary">Pelanggan</span> Kami?
            </h2>
            <p className="text-responsive text-muted-foreground text-balance">
              Kepuasan pelanggan adalah prioritas utama kami. Berikut testimoni dari pelanggan yang telah menggunakan
              layanan percetakan Al Jadid Offset Karanganyar.
            </p>
          </motion.div>

          <div className="grid-responsive-3 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="glass-effect hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 sm:h-4 sm:w-4 ${
                            i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-responsive-sm text-muted-foreground mb-3 sm:mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-2 sm:mr-3">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-xs sm:text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 sm:top-16 md:top-20 right-[10%] sm:right-[15%] md:right-[20%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-[10%] sm:left-[15%] md:left-[20%] w-36 h-36 sm:w-54 sm:h-54 md:w-72 md:h-72 bg-secondary/10 rounded-full blur-2xl md:blur-3xl"></div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto glass-effect rounded-2xl p-6 sm:p-8 md:p-12 text-center"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block glass-effect px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
              >
                ✨ Konsultasi Gratis
              </motion.div>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="heading-md text-balance"
              >
                Siap Mewujudkan Kebutuhan <span className="text-primary">Percetakan</span> Anda?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-responsive text-muted-foreground text-balance"
              >
                Hubungi Al Jadid Offset Karanganyar sekarang untuk konsultasi gratis tentang kebutuhan cetak kertas,
                MMT/banner, sticker, sampul rapot, piala, undangan, sablon kaos, sablon tas, dan layanan lainnya.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4"
              >
                <Button asChild size="lg" className="glass-button text-responsive">
                  <Link href="/contact">Hubungi Kami Sekarang</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="glass-effect text-responsive">
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 90 90"
                      fill="none"
                      className="mr-2 sm:w-5 sm:h-5"
                    >
                      <path
                        d="M90 43.841C90 68.066 70.562 87.5 46.352 87.5C38.437 87.5 30.93 85.5 24.375 81.96L0 90L8.325 66.5C4.125 59.75 1.875 51.98 1.875 43.841C1.875 19.58 21.3 0 46.352 0C70.562 0 90 19.58 90 43.841ZM46.352 6.956C25.313 6.956 8.85 23.381 8.85 43.841C8.85 51.86 11.438 59.736 16.275 66.195L11.25 80.044L25.65 75.094C31.8 79.344 38.775 81.694 46.352 81.694C67.387 81.694 83.85 65.27 83.85 44.81C83.85 24.351 67.387 6.956 46.352 6.956ZM68.775 53.666C68.4 53.666 67.65 53.666 67.275 53.291C66.525 53.291 66.15 52.916 65.025 52.541C64.275 52.166 62.775 51.416 61.65 51.041C61.275 50.666 60.525 50.666 60.15 50.666C59.4 50.666 59.025 51.041 58.65 51.416C58.275 51.791 57.15 52.916 56.775 53.291C56.4 53.666 56.025 53.666 55.65 53.291C55.275 53.291 54.15 52.916 52.65 52.166C51.15 51.416 49.65 50.291 48.525 48.791C48.15 48.041 47.4 47.291 47.025 46.541C46.65 46.166 46.65 45.791 47.025 45.416C47.025 45.041 47.4 44.666 47.775 44.291C47.775 44.291 48.15 43.916 48.15 43.541C48.525 43.166 48.525 42.791 48.525 42.416C48.525 42.041 48.15 41.291 47.775 40.916C47.4 40.541 46.275 38.291 45.9 37.541C45.525 36.416 45.15 36.416 44.775 36.416H43.65C43.275 36.416 42.525 36.416 41.775 37.166C41.4 37.541 40.275 38.666 40.275 40.916C40.275 43.166 41.775 45.416 42.15 45.791C42.525 46.166 47.025 53.291 54.15 56.291C55.275 56.666 56.4 57.041 57.15 57.416C58.65 57.791 59.775 57.791 60.9 57.416C62.025 57.041 63.9 56.291 64.275 55.166C64.65 54.041 64.65 53.291 64.275 52.916C64.275 52.916 63.9 52.541 63.15 52.541C62.775 53.291 69.525 53.666 68.775 53.666Z"
                        fill="currentColor"
                      />
                    </svg>
                    Chat WhatsApp
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
