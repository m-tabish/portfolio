const SocialLink = ({ height, width, social_name }) => {
  return (
    <div>
      <a className={`h-full w-full rounded-full  hover:opacity-100`} href="https://peerlist.io/tabish" target="_blank">
        <img className={`h-${height} w-${width} rounded-full`} src={social_name} alt="" />
      </a>
    </div>
  );
};

export default SocialLink;
