// Components
import DocViewer from 'react-doc-viewer';

const docs = [
  { uri: '@/public/posters/ryan.pdf' }
];

const PDFViewer = () => {
  return (
    <div>
      <DocViewer documents={docs} />
    </div>
  );
};

export { PDFViewer };
