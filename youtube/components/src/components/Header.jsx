// function Header() {
//   let menus=[
// 'Home','About','Contact'
//   ]
  
//   return (
//     <div>
//       <ul>
//         <li>{menus[0]}</li>
//         <li>{menus[1]}</li>
//         <li>{menus[2]}</li>
//       </ul>
//     </div>
//   );
// }

// export default Header;
import React from "react";
class Menu extends React.Component {
  render() {
    let menus = ['Home', 'About', 'Contact'];

    return (
      <div>
        <ul>
          {menus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
