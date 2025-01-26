import { IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";

const TodoList = ({ sharedUserFullName = "", owerUserId = "" }) => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text) => {
    const sharedLink = `${"toodList공유할 링크"}/share/${owerUserId}`;
    copy(text)
      .then(() => {
        window.alert(`공유링크 복사 완료! \n ${sharedLink}`);
        console.log("Copied", { sharedLink });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <section className=" min-h-[70vh] bg-[#69CFCF]">
      <div className="w-full max-w-3xl p-5 mx-auto">
        <article className="flex flex-row justify-between items-center">
          <div className="font-bold text-3xl">
            {sharedUserFullName && <div>{sharedUserFullName}</div>}
            Things to do:
          </div>
          {owerUserId && (
            <div
              onClick={() => handleCopy()}
              className="flex flex-row items-center font-bold text-2xl cursor-pointer"
            >
              Share
              <IoShareSocialOutline />
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default TodoList;
