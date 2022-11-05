import { AboutCourse } from '@/components/AboutCourse';
import { AboutTraining } from '@/components/AboutTraining';
import { Curriculum } from '@/components/Curriculum';
import { Devops } from '@/components/Devops';
import { Feedbacks } from '@/components/Feedbacks';
import { Footer } from '@/components/Footer';
import { GetStarted } from '@/components/GetStarted';
import { Header } from '@/components/Header';
import { JobAssistance } from '@/components/JobAssistance';
import { LearningProgram } from '@/components/LearningProgram';
import { Main } from '@/components/Main';
import { OurTeam } from '@/components/OurTeam';
import { PackageCost } from '@/components/PackageCost';
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
      <OurTeam />
      <Curriculum />
      <LearningProgram />
      <PackageCost />
      <Feedbacks />
      <GetStarted />
      <Footer />
    </div>
  );
};
