"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageSquare, Printer } from "lucide-react"
import { PageHeader } from "@/components/ui/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean
    success: boolean
    message: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // In a real implementation, you would send this to FormSubmit or Formspree
    // For demo purposes, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Pesan Anda telah berhasil dikirim. Tim Al Jadid Offset Karanganyar akan menghubungi Anda segera.",
    })

    // Reset form
    ;(e.target as HTMLFormElement).reset()
  }

  const locations = [
    {
      name: "Al Jadid Offset Karanganyar (Kantor Pusat)",
      address: "Jl. Percetakan No. 123, Karanganyar, Jawa Tengah 57714",
      phone: "+62 271 1234 5678",
      email: "info@aljadidoffset.com",
      coordinates: {
        lat: -7.600554600000001,
        lng: 110.94955108885497,
      },
      mapUrl: "https://maps.google.com/maps?q=-7.600554600000001,110.94955108885497&z=16&output=embed",
      services: ["Cetak MMT", "Cetak Sticker", "Cetak Buku", "Sampul Rapot"],
    },
    {
      name: "Al Jadid Offset 2 (Cabang Karanganyar)",
      address: "Jl. Grafika No. 45, Karanganyar, Jawa Tengah 57714",
      phone: "+62 271 8765 4321",
      email: "cabang@aljadidoffset.com",
      coordinates: {
        lat: -7.6014142924135095,
        lng: 110.95488187376037,
      },
      mapUrl: "https://maps.google.com/maps?q=-7.6014142924135095,110.95488187376037&z=16&output=embed",
      services: ["Digital Printing", "Finishing", "Desain Grafis"],
    },
  ]

  return (
    <>
      {/* Header */}
      <PageHeader
        title="Hubungi Percetakan Al Jadid Karanganyar"
        description="Konsultasi gratis untuk kebutuhan cetak MMT, cetak sticker, cetak buku, dan sampul rapot di Karanganyar"
      />

      {/* Contact Info & Form */}
      <section className="w-full py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
                  Informasi Kontak Percetakan Karanganyar
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Hubungi Al Jadid Offset Karanganyar untuk konsultasi cetak MMT, cetak sticker, cetak buku, sampul
                  rapot, dan layanan percetakan lainnya.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6 flex items-center space-x-4">
                    <Phone className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-base md:text-lg mb-1">Telepon Karanganyar</CardTitle>
                      <CardDescription className="text-xs md:text-sm">
                        <a href="tel:+622711234567" className="hover:text-primary">
                          +62 271 1234 5678
                        </a>
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6 flex items-center space-x-4">
                    <Mail className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-base md:text-lg mb-1">Email</CardTitle>
                      <CardDescription className="text-xs md:text-sm">
                        <a href="mailto:info@aljadidoffset.com" className="hover:text-primary">
                          info@aljadidoffset.com
                        </a>
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6 flex items-center space-x-4">
                    <MapPin className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-base md:text-lg mb-1">Alamat Karanganyar</CardTitle>
                      <CardDescription className="text-xs md:text-sm">
                        Jl. Percetakan No. 123, Karanganyar, Jawa Tengah
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6 flex items-center space-x-4">
                    <Printer className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-base md:text-lg mb-1">Layanan Utama</CardTitle>
                      <CardDescription className="text-xs md:text-sm">
                        Cetak MMT, Sticker, Buku, Sampul Rapot
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>

                <Card className="sm:col-span-2 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 md:p-6 flex items-center space-x-4">
                    <MessageSquare className="h-8 w-8 text-[#25D366]" />
                    <div>
                      <CardTitle className="text-base md:text-lg mb-1">WhatsApp Karanganyar</CardTitle>
                      <CardDescription className="text-xs md:text-sm">
                        <a
                          href="https://wa.me/6281234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#25D366]"
                        >
                          +62 812 3456 7890 - Chat langsung untuk konsultasi
                        </a>
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Konsultasi Gratis Percetakan</CardTitle>
                <CardDescription className="text-xs md:text-sm">
                  Isi formulir untuk konsultasi cetak MMT, cetak sticker, cetak buku, atau sampul rapot di Karanganyar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">
                      Nama Lengkap
                    </Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">
                      Email
                    </Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm">
                      Telepon / WhatsApp
                    </Label>
                    <Input id="phone" name="phone" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm">
                      Layanan yang Dibutuhkan
                    </Label>
                    <select id="service" name="service" className="w-full p-2 border rounded-md" required>
                      <option value="">Pilih Layanan</option>
                      <option value="cetak-mmt">Cetak MMT / Banner</option>
                      <option value="cetak-sticker">Cetak Sticker</option>
                      <option value="cetak-buku">Cetak Buku</option>
                      <option value="sampul-rapot">Sampul Rapot</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm">
                      Detail Kebutuhan
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Jelaskan detail kebutuhan percetakan Anda (ukuran, jumlah, deadline, dll)"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Kirim Konsultasi
                  </Button>

                  {formStatus && (
                    <div
                      className={`p-3 rounded-md ${formStatus.success ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="w-full py-8 md:py-16 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Lokasi Percetakan Al Jadid Karanganyar</h2>
            <p className="max-w-[600px] text-sm md:text-base text-muted-foreground">
              Kunjungi kantor kami di Karanganyar untuk konsultasi langsung tentang kebutuhan percetakan Anda
            </p>
          </div>

          <Tabs defaultValue="location-0" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="grid grid-cols-2 gap-2">
                {locations.map((location, index) => (
                  <TabsTrigger
                    key={`location-${index}`}
                    value={`location-${index}`}
                    className="text-xs md:text-sm px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {index === 0 ? "Kantor Pusat" : "Cabang"}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {locations.map((location, index) => (
              <TabsContent key={`location-${index}`} value={`location-${index}`} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden">
                    <div className="aspect-video w-full">
                      <iframe
                        src={location.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={location.name}
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>{location.name}</CardTitle>
                      <CardDescription>Informasi detail lokasi dan layanan</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Alamat:</p>
                          <p className="text-sm text-muted-foreground">{location.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Telepon:</p>
                          <p className="text-sm text-muted-foreground">{location.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Email:</p>
                          <p className="text-sm text-muted-foreground">{location.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Printer className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Layanan Utama:</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {location.services.map((service, idx) => (
                              <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="pt-4">
                        <Button asChild variant="outline" className="w-full">
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Petunjuk Arah ke Karanganyar
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Service Areas */}
      <section className="w-full py-8 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">Area Layanan Percetakan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Al Jadid Offset melayani kebutuhan percetakan di Karanganyar dan wilayah sekitarnya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Karanganyar</h3>
                <p className="text-sm text-muted-foreground">
                  Melayani seluruh wilayah Karanganyar untuk cetak MMT, sticker, buku, dan sampul rapot
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Solo & Surakarta</h3>
                <p className="text-sm text-muted-foreground">
                  Jangkauan layanan hingga Solo dan Surakarta dengan layanan antar
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Wilayah Sekitar</h3>
                <p className="text-sm text-muted-foreground">
                  Melayani juga Boyolali, Wonogiri, dan wilayah sekitar Karanganyar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="w-full py-8 md:py-16 glass-effect relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 md:p-12 text-center">
            <div className="space-y-6">
              <div className="inline-block glass-effect px-4 py-2 rounded-full text-sm font-medium">
                Konsultasi Gratis Percetakan Karanganyar
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                Butuh Layanan Percetakan <span className="text-primary">Berkualitas</span>?
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Tim Al Jadid Offset Karanganyar siap membantu kebutuhan cetak MMT, cetak sticker, cetak buku, dan sampul
                rapot Anda. Hubungi kami sekarang untuk konsultasi gratis!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="glass-button text-sm md:text-base">
                  <a href="tel:+622711234567">
                    <Phone className="mr-2 h-4 w-4" />
                    Hubungi Sekarang
                  </a>
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
                    Chat WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
