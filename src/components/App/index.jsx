import { AboutCourse } from '@/components/AboutCourse';
import { AboutTraining } from '@/components/AboutTraining';
import { Devops } from '@/components/Devops';
import { Header } from '@/components/Header';
import { JobAssistance } from '@/components/JobAssistance';
import { Main } from '@/components/Main';
import { StartInfoLine } from '@/components/StartInfoLine';

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <StartInfoLine />
      <Devops />
      <AboutCourse />
      <JobAssistance />
      <AboutTraining />
    </div>
  );
};
