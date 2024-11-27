import { Container } from '@/components/Container'
import communication from '@/images/screenshots/communication.png'
import feed from '@/images/screenshots/feed.png'
import knowledge from '@/images/screenshots/knowledge.png'
import {
  SiAnsible,
  SiAtlassian,
  SiFlux,
  SiGitlab,
  SiHashicorp,
  SiKubernetes,
  SiMicrosoft,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencontainersinitiative,
  SiReact,
  SiRedhat,
  SiRedhatopenshift,
} from 'react-icons/si'

const techonologies = [
  ['Kubernetes', SiKubernetes],
  ['OpenShift', SiRedhatopenshift],
  ['Red Hat', SiRedhat],
  ['Containers', SiOpencontainersinitiative],
  ['Ansible', SiAnsible],
  ['HashiCorp', SiHashicorp],
  ['GitLab', SiGitlab],
  ['Atlassian', SiAtlassian],
  ['Microsoft', SiMicrosoft],
  ['Next.js', SiNextdotjs],
  ['React', SiReact],
  ['Node.js', SiNodedotjs],
]

export function Technologies() {
  return (
    <section
      id="technologies"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-gradient-to-b from-gray-900  to-gray-900 pb-28 pt-20 sm:py-32 xl:rounded-tl-full"
    >
      <Container className="relative">
      <div className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Wij bouwen met de beste technologieën
          </h2>
          <div className="h-px flex-auto bg-white" />
        </div>
        <ul
          role="list"
          className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
        >
          {techonologies.map(([techonology, Icon]) => (
            <li key={techonology}>
              <div className="inline-flex items-center space-x-2">
                <Icon className="h-6 w-6 text-white" />
                <p className="font-bold text-white">{techonology}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
