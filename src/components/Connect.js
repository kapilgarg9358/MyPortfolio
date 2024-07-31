import IconCover from "./IconCover";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Connect = () => {
  return (
    <div className="flex gap-x-4">
      <IconCover
        icon={<FaGithub className="" />}
        link="https://github.com/kapilgarg9358"
      />
      <IconCover
        icon={<FaLinkedin className="" />}
        link="https://www.linkedin.com/in/kapil-9358-garg/"
      />
      <IconCover
        icon={<FaTwitter className="" />}
        link="https://x.com/KapilGarg9358"
      />
      <IconCover
        icon={<SiLeetcode className="" />}
        link="https://leetcode.com/u/kapil_9358/"
      />
    </div>
  );
};

export default Connect;
