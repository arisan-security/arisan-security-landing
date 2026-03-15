import Slider from "react-slick";
import Image from "next/image";
import { useTranslations } from "next-intl";

export interface Collaborator {
  path: string;
  alt: string;
}

export interface CollaboratorProps {
  settings: any; // react-slick settings type
  collaborators: Collaborator[];
}

/**
 * Collaborator section: shows logos of organizations that have collaborated with A-SEC.
 * Uses react-slick for carousel. Images are optimized with Next.js Image.
 */
const Collaborator: React.FC<CollaboratorProps> = ({ settings, collaborators }) => {
  const t = useTranslations('Collaborator');

  return (
    <section className="pt-14 px-8 snap-start">
      <div className="text-center">
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 mb-8">
          {t('title')}
        </h2>
        <div>
          <Slider {...settings}>
            {collaborators.map((collaborator) => (
              <div key={collaborator.path} className="transform hover:scale-125">
                <Image
                  className="mx-auto"
                  src={collaborator.path}
                  alt={collaborator.alt}
                  width={120}
                  height={48}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Collaborator;
