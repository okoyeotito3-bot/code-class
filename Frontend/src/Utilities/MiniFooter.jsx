import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function MiniFooter() {
  return (
    <section className="flex flex-col gap-12 p-4 md:px-20 md:pt-16 md:pb-12 lg:px-20 lg:pt-16 lg:pb-12">
      <div className="flex flex-col md:flex-row lg:flex-row gap-8 justify-between pt-6">
        <p className="text-[#64748B] font-geist text-sm">
          © 2026 CodeClass, Inc. All rights reserved.
        </p>
        <div className="flex gap-4">
          <FaGithub className="text-[#94A3B8] " size={20} />
          <FaTwitter className="text-[#94A3B8] " size={20} />
          <FaLinkedin className="text-[#94A3B8] " size={20} />
        </div>
      </div>
    </section>
  );
}
