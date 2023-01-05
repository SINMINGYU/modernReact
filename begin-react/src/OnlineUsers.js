import React from "react";
function OnlineUsers({ count }) {
    return <div>활성사용자 수 : {count}</div>;
}
export default React.memo(OnlineUsers);
