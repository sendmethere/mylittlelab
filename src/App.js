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
        <div className='flex gap-4'>
          {
          menu.map((item) => {
            return (
            <div id={item.id} key={item.id} style={{backgroundColor: item.color}} className={`w-[100px] rounded-tl-xl rounded-tr-xl p-2 cursor-pointer hover:brightness-110 ${ currentMenu === item.id-1 ? "" : "contrast-[0.5] opacity-50"}`} onClick={handleMenuClick}>
              <p id={item.id} className='font-bold text-center'>{item.title}</p>
            </div>
            )
          })
        }
        </div>
      <div style={{backgroundColor: menu[currentMenu].color }} className='w-full p-6 rounded-tr-xl rounded-b-xl shadow-md' >
        <div className='bg-white rounded-xl w-full md:h-[450px] md:overflow-scroll p-6'>
          {menu[currentMenu].page}
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;
