import Loadable from 'react-loadable';
import DelayLoading from '@components/DelayLoading';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ '../pages/Home/index'),
  loading: DelayLoading,
});
const Introduction = Loadable({
  loader: () =>
    import(/* webpackChunkName: "ResearchDirection" */ '../pages/Introduction/index'),
  loading: DelayLoading,
});

const CallForPapers = Loadable({
  loader: () => import(/* webpackChunkName: "AcademicPaper" */ '../pages/CallForPapers/index'),
  loading: DelayLoading,
});

const Attendance = Loadable({
  loader: () => import(/* webpackChunkName: "AcademicPaper" */ '../pages/Attendance/index'),
  loading: DelayLoading,
});

const Speakers = Loadable({
  loader: () => import(/* webpackChunkName: "LabPic" */ '../pages/Speakers/index'),
  loading: DelayLoading,
});

const Transportation = Loadable({
  loader: () => import(/* webpackChunkName: "AcademicPaper" */ '../pages/Transportation/index'),
  loading: DelayLoading,
});

const Contact = Loadable({
  loader: () => import(/* webpackChunkName: "AcademicPaper" */ '../pages/Contact/index'),
  loading: DelayLoading,
});

const Accommodation = Loadable({
  loader: () => import(/* webpackChunkName: "HomePage" */ '../pages/Accommodation/index'),
  loading: DelayLoading,
});

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/introduction',
    component: Introduction,
  },
  {
    path: '/call-for-papers',
    component: CallForPapers,
  },
  {
    path: '/attendance',
    component: Attendance,
  },
  {
    path: '/speakers',
    component: Speakers,
  },
  {
    path: '/transportation',
    component: Transportation,
  },
  {
    path: '/accommodation',
    component: Accommodation,
  },
  {
    path: '/contact',
    component: Contact,
  },
];
