import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Иван",
    role: "Генеральный директор",
    description:
      "Иван определяет стратегию Orlov Brand и уверенно ведёт команду к достижению больших целей.",
    image:
      "https://sun9-8.userapi.com/s/v1/if2/PlDstXaHzHTFd40s7ZeMo5wtEMWo_iVdZL4w30YdSc7fvLWTlKqXceA_TPT9GrIKrdNfDrStzsw6fTiCh6r42djO.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1170x780&from=bu&cs=1170x0",
    socials: { facebook: "#", twitter: "#", github: "#", website: "#" },
  },
  {
    name: "Александр",
    role: "Разработчик",
    description:
      "Александр строит платформу Orlov Brand на принципах надёжности, скорости и технологического совершенства.",
    image:
      "https://sun9-87.userapi.com/s/v1/ig2/Y3TBz7eZ0YacYJ5JEwCi5lcGmRsmGj7pm5A1WVvbOxfn7SI9SEy2WSrjjl3BeiglFTOvvbj4l6ZtJsYg8SJd1oYY.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&from=bu&cs=1080x0",
    socials: { facebook: "#", twitter: "#", github: "#", website: "#" },
  },
];

// Контейнер: плавный ритм появления
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Элементы: плавное появление через scale + opacity
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const TeamSimpleSection: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full min-h-screen bg-background py-16 px-4 flex items-center justify-center">
      <div className="max-w-[1245px] mx-auto flex flex-col lg:flex-row lg:items-start gap-12">
        {/* Левая колонка */}
        <motion.div
          variants={cardVariants}
          className="lg:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-extrabold text-primary mb-4 select-none">
            Наши люди — наше величие
          </h2>
          <p className="text-text-secondary select-none">
            В ORLOV мы создаём продукты, в которых сочетаются технологии,
            культура и премиальное качество.
          </p>
          <p className="text-text-secondary select-none">
            Работая с нами, вы встречаете профессионалов, решаете нестандартные
            задачи и находите единомышленников.
          </p>
        </motion.div>

        {/* Правая колонка */}
        <motion.div
          variants={containerVariants}
          className="lg:w-1/2 flex flex-col gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-6 border-b border-border pb-6 select-none">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full pointer-events-none"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-text-secondary mb-2">{member.role}</p>
                <p className="text-text-secondary mb-4">{member.description}</p>
                <div className="flex gap-4">
                  {member.socials.facebook && (
                    <a
                      href={member.socials.facebook}
                      className="text-text-secondary hover:text-white">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="text-text-secondary hover:text-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      className="text-text-secondary hover:text-white">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {member.socials.website && (
                    <a
                      href={member.socials.website}
                      className="text-text-secondary hover:text-white">
                      <i className="fas fa-globe"></i>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSimpleSection;
