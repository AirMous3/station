import { AboutCourse } from '@/components/AboutCourse';
import { AboutTraining } from '@/components/AboutTraining';
import { Curriculum } from '@/components/Curriculum';
import { Devops } from '@/components/Devops';
import { Header } from '@/components/Header';
import { JobAssistance } from '@/components/JobAssistance';
import { Main } from '@/components/Main';
import { OurTeam } from '@/components/OurTeam';
import { StartInfoLine } from '@/components/StartInfoLine';

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <StartInfoLine />
      <Devops />
      <AboutCourse />
      {/*<JobAssistance />*/}
      <AboutTraining />
      <OurTeam />
      <Curriculum />
    </div>
  );
};
