import { useEffect, useState } from "react";

function ChooseAvatar() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handleChooseAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };

  return (
    <div>
      <input type="file" onChange={handleChooseAvatar}></input>

      {avatar && <img src={avatar.preview} alt="" width="80%"></img>}
    </div>
  );
}

export default ChooseAvatar;
