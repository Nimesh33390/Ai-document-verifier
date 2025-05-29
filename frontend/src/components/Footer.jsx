import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        {/* Left: Copyright */}
        <p className="text-sm text-center sm:text-left">
          © 2025 <span className="font-semibold text-white">AI DocMate</span>. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <ul className="flex space-x-6 mt-4 sm:mt-0">
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub className="size-5" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaTwitter className="size-5" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin className="size-5" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
