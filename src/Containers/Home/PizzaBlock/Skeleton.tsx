import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    style={{marginBottom: '47px'}}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="130" r="130" /> 
    <rect x="20" y="270" rx="10" ry="10" width="240" height="24" /> 
    <rect x="17" y="420" rx="10" ry="10" width="60" height="30" /> 
    <rect x="111" y="410" rx="20" ry="20" width="150" height="50" /> 
    <rect x="0" y="310" rx="10" ry="10" width="280" height="88" />
  </ContentLoader>
)

export default Skeleton;