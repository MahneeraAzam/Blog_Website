

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook } from "lucide-react"
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-white py-16 mt-[100px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-[#E97451]" />
                <div className="w-4 h-4 bg-[#E97451]" />
              </div>
              <span className="text-2xl font-bold">BulkAI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Welcome to BulkAI, your go-to solution for efficient bulk SMS communication. 
              Our platform offers instant, cost-effective messaging to connect with your audience.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="bg-[#E97451] p-2 rounded-full hover:opacity-90">
              <FaFacebookF className="w-5 h-5"  />
              </Link>
              <Link href="#" className="bg-[#E97451] p-2 rounded-full hover:opacity-90">
              <FaInstagram className="w-5 h-5"/>
              </Link>
              <Link href="#" className="bg-[#E97451] p-2 rounded-full hover:opacity-90">
              <FaLinkedin className="w-5 h-5"/>
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/api" className="hover:text-white">API</Link></li>
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/software" className="hover:text-white">Software</Link></li>
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our solutions</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/pricing" className="hover:text-white">SMS Pricing</Link></li>
              <li><Link href="/web" className="hover:text-white">SMS from the Web</Link></li>
              <li><Link href="/" className="hover:text-white">Desktop SMS</Link></li>
              <li><Link href="/api" className="hover:text-white">SMS API</Link></li>
              <li><Link href="/integrations" className="hover:text-white">SMS Integrations</Link></li>
            </ul>
          </div>

          {/* Subscribe and Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <div className="flex gap-2 mb-8">
              <Input 
                type="email" 
                placeholder="Enter your email here"
                className="bg-transparent border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-[#E97451] hover:bg-[#E97451]/90">
                Subscribe
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-400">119 Tanglewood Lane Gulfport, MS 39503</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="text-gray-400">+0 12 4857 4578</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2000 - 2024 Bulkai. All Rights Reserved.</p>
          <div className="flex gap-6 text-gray-400">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

