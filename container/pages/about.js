import { dynamicImport } from '../@container/utility/dynamic-import';

export default dynamicImport(() => import('about/aboutPage'));
