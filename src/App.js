import React from 'react';
import useStore from './store';


const App = () => {

  const {
    menu,
    currentMenu,
    setCurrentMenu,
  } = useStore();


  const handleMenuClick = (e) => {
    const id = parseInt(e.target.getAttribute('id')) - 1;
    setCurrentMenu(id);
  }
  
  return (
    <div style={{backgroundColor: "#f0f2f4"}} className='min-h-screen flex flex-col justify-center items-center'>
      <div className='text-2xl font-bold my-8'>🔬 My Little LAB</div>
      <div className='lg:w-[900px] w-full mb-8'>
        <div className='flex gap-2'>
          {
          menu.map((item) => {
            return (
            <div id={item.id} key={item.id} style={{backgroundColor: item.color}} className={`w-[100px] rounded-tl-xl rounded-tr-xl p-2 cursor-pointer transition-all duration-200 ${ currentMenu === item.id-1 ? "hover:brightness-110" : "contrast-[0.6] opacity-60 hover:contrast-[0.9] hover:opacity-75"}`} onClick={handleMenuClick}>
              <p id={item.id} className='text-sm md:text-base font-bold text-center'>{item.title}</p>
            </div>
            )
          })
        }
        </div>
      <div style={{backgroundColor: menu[currentMenu].color }} className='w-full p-6 md:rounded-tr-xl rounded-b-xl shadow-md transition-all duration-200' >
        <div className={`bg-white rounded-xl w-full ${ currentMenu === 5 ? '' : 'md:h-[500px]' } md:overflow-y-scroll p-6`}>
          {menu[currentMenu].page}
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;
