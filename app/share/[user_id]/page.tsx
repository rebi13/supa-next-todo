interface SharePageProps {
  params: { user_id: string };
  searchParams: {};
}

const SharePage = async (props: SharePageProps) => {
  const userId = props?.params?.user_id;

  console.log(">>userId", userId);
  console.log(">>props", props);
  return <div>share page</div>;
};

export default SharePage;
