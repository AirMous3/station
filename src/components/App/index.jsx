import { AboutCourse } from '@/components/AboutCourse';
import { Devops } from '@/components/Devops';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { StartInfoLine } from '@/components/StartInfoLine';
import { JobAssistance } from '@/components/JobAssistance';

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <StartInfoLine />
      <Devops />
      <AboutCourse />
      <JobAssistance/>
    </div>
  );
};
