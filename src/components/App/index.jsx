import { AboutCourse } from '@/components/AboutCourse';
import { Devops } from '@/components/Devops';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { StartInfoLine } from '@/components/StartInfoLine';
import { Ticker } from '@/components/Ticker';

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <StartInfoLine />
      <Devops />
      <AboutCourse />
      <Ticker />
      <Ticker direction={'left'} />
    </div>
  );
};
