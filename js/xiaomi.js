class Product {
  constructor(name, price, imgUrl) {
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}

// 小米手机数据
const xiaomiPhoneList = [
  new Product('小米15 Ultra', 5999, 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png?thumb=1&w=288&h=198&f=webp&q=90'),
  new Product('小米15 Pro', 4999, 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png?thumb=1&w=288&h=198&f=webp&q=90'),
  new Product('小米15', 3999, 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3fd13de87bcd8755fdbb804bfba467a.png?thumb=1&w=288&h=198&f=webp&q=90'),
  new Product('小米15 定制版', 4999, 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b17e107bd68b683c92e2245715bb7e54.png?thumb=1&w=288&h=198&f=webp&q=90'),
  new Product('小米MIX Fold 4', 6999, 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a8fec02d8edf2bc5d1ed975823465c6.png?thumb=1&w=288&h=198&f=webp&q=90'),
  new Product('小米MIX Flip', 5999, 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/851b0039398ebce5909ef54360b03d1a.png?thumb=1&w=288&h=198&f=webp&q=90')
];

// 红米手机数据
const redmiPhoneList = [
  new Product('小米15 Ultra', 5999, '../img/headCab/REDMI手机/1.webp'),
  new Product('小米15 Pro', 4999, '../img/headCab/REDMI手机/2.webp'),
  new Product('小米15', 3999, '../img/headCab/REDMI手机/3.webp'),
  new Product('小米15 定制版', 4999, '../img/headCab/REDMI手机/4.webp'),
  new Product('小米MIX Fold 4', 6999, '../img/headCab/REDMI手机/5.webp'),
  new Product('小米MIX Flip', 5999, '../img/headCab/REDMI手机/6.webp')
];

// 电视数据
const tvList = [
  new Product('小米电视ES 55', 2999, '../../img/headCab/电视/1.webp'),
  new Product('小米电视ES 60', 3999, '../img/headCab/电视/2.webp'),
  new Product('小米电视ES 65', 3999, '../img/headCab/电视/3.webp'),
  new Product('小米电视ES 75', 4999, '../img/headCab/电视/4.webp'),
  new Product('小米电视ES 85', 6999, '../img/headCab/电视/5.webp'),
  new Product('小米电视ES Pro 65', 4599, '../img/headCab/电视/6.webp'),

];

// 笔记本数据
const laptopList = [
  new Product('小米笔记本Pro 14', 4999, '../img/headCab/笔记本/2.webp'),
  new Product('小米笔记本Pro 16', 5999, '../img/headCab/笔记本/1.webp'),
  new Product('小米笔记本Air 13', 3999, '../img/headCab/笔记本/3.webp'),
  new Product('RedmiBook Pro 14', 4299, '../img/headCab/笔记本/4.webp'),
  new Product('RedmiBook Pro 16', 4699, '../img/headCab/笔记本/5.webp'),
  new Product('RedmiBook 14', 3299, '../img/headCab/笔记本/6.webp')
];

// 平板数据
const tabletList = [
  new Product('小米笔记本Pro 14', 4999, '../img/headCab/平板/2.webp'),
  new Product('小米笔记本Pro 16', 5999, '../img/headCab/平板/1.webp'),
  new Product('小米笔记本Air 13', 3999, '../img/headCab/平板/3.webp'),
  new Product('RedmiBook Pro 14', 4299, '../img/headCab/平板/4.webp'),
  new Product('RedmiBook Pro 16', 4699, '../img/headCab/平板/5.webp'),
  new Product('RedmiBook 14', 3299, '../img/headCab/平板/6.webp')
];

// 家电数据
const homeApplianceList = [
  new Product('小米空调', 2999, '../img/headCab/家电/1.webp'),
  new Product('小米洗衣机', 3999, '../img/headCab/家电/2.webp'),
  new Product('小米扫地机器人', 4999, '../img/headCab/家电/3.webp'),
  new Product('小米空气净化器', 5999, '../img/headCab/家电/4.webp'),
  new Product('小米净水器', 6999, '../img/headCab/家电/5.webp'),
  new Product('小米冰箱', 7999, '../img/headCab/家电/6.webp')
];

// 路由器数据
const routerList = [
  new Product('小米路由器AX3000', 299, '../img/headCab/路由器/1.webp'),
  new Product('小米路由器AX1800', 199, '../img/headCab/路由器/2.webp'),
  new Product('小米路由器AX6000', 399, '../img/headCab/路由器/3.webp'),
  new Product('小米路由器AX9000', 499, '../img/headCab/路由器/4.webp'),
  new Product('小米路由器4A', 99, '../img/headCab/路由器/5.webp'),
  new Product('小米路由器4C', 79, '../img/headCab/路由器/6.png')
];

const tab = document.querySelector(".tab");
const headerCab = document.querySelector(".headerCab");
let currentTabgoods = null;
let hoverTimeout = null;

// 创建面板函数（只执行一次）
function createTabgoodsPanel() {
  if (!currentTabgoods) {
    currentTabgoods = document.createElement("div");
    currentTabgoods.className = "currentTabgoods";
    headerCab.appendChild(currentTabgoods);

    // 面板鼠标交互
    currentTabgoods.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimeout);
      currentTabgoods.classList.add('active');
    });

    currentTabgoods.addEventListener("mouseleave", () => {
      hoverTimeout = setTimeout(() => {
        currentTabgoods.classList.remove('active');
      }, 200);
    });
  }
}

// 主交互逻辑
tab.addEventListener("mouseover", async (e) => {
  if (e.target.tagName === "A" && e.target.dataset.id) {
    const target = e.target;
    const categoryId = target.dataset.id;

    clearTimeout(hoverTimeout);
    createTabgoodsPanel();

    let contentData = [];

    // 根据data-id选择数据源
    switch (categoryId) {
      case '1':
        contentData = xiaomiPhoneList;
        break;
      case '2':
        contentData = redmiPhoneList;
        break;
      case '3':
        contentData = tvList;
        break;
      case '4':
        contentData = laptopList;
        break;
      case '5':
        contentData = tabletList;
        break;
      case '6':
        contentData = homeApplianceList;
        break;
      case '7':
        contentData = routerList;
        break;
      default:
        // 其他品类的默认处理
        contentData = [];
    }

    currentTabgoods.innerHTML = `
          <ul>
            ${contentData.map(item => `
              <li>
                <a href="#">
                  <div class="img">
                    <img src="${item.imgUrl}" alt="${item.name}">
                  </div>
                  <div class="info">
                    <div class="name">${item.name}</div>
                    <div class="price">${item.price ? item.price + '元' : '价格待定'}</div>
                  </div>
                </a>
              </li>
            `).join('')}
          </ul>`;

    currentTabgoods.classList.add('active');
  }
});

//banner-l展开图
const bannerL = document.querySelector('.banner-l');
const bannerLList = document.querySelectorAll('.banner-l li');
const container = document.querySelector('.container');
const containerData = []
class bnProducts {
  constructor(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
  }
}
const bnPhone = [
  new bnProducts('Redmi 10X', '../img/bnl/手机/1.webp'),
  new bnProducts('Redmi 10X', '../img/bnl/手机/2.webp'),
  new bnProducts('Redmi 10X', '../img/bnl/手机/3.webp'),
  new bnProducts('Redmi 10X', '../img/bnl/手机/4.webp'),
  new bnProducts('Redmi 10X', '../img/bnl/手机/5.webp'),
  new bnProducts('Redmi 10X', '../img/bnl/手机/6.webp'),
  new bnProducts('Redmi 10X', '../img/bnl/手机/7.webp'),

]
const bnTv = [
  new bnProducts('小米电视4A', '../img/bnl/电视/1.webp'),
  new bnProducts('小米电视4A', '../img/bnl/电视/2.webp'),
  new bnProducts('小米电视4A', '../img/bnl/电视/3.webp'),
  new bnProducts('小米电视4A', '../img/bnl/电视/4.webp'),
  new bnProducts('小米电视4A', '../img/bnl/电视/5.webp'),
  new bnProducts('小米电视4A', '../img/bnl/电视/6.webp'),

]

const bnJiadian = [
  new bnProducts('挂壁空调', '../img/bnl/家电/1.png'),
  new bnProducts('挂壁空调', '../img/bnl/家电/2.webp'),
  new bnProducts('挂壁空调', '../img/bnl/家电/3.webp'),
  new bnProducts('挂壁空调', '../img/bnl/家电/4.webp'),
  new bnProducts('挂壁空调', '../img/bnl/家电/5.webp'),
  new bnProducts('挂壁空调', '../img/bnl/家电/6.webp'),
  new bnProducts('挂壁空调', '../img/bnl/家电/7.webp'),
  new bnProducts('挂壁空调', '../img/bnl/家电/8.webp'),
  new bnProducts('挂壁空调', '../img/bnl/家电/9.jpg'),
  new bnProducts('挂壁空调', '../img/bnl/家电/10.jpg')

]
const bnbijiben = [
  new bnProducts('小米电视4A', '../img/bnl/笔记本/1.webp'),
  new bnProducts('小米电视4A', '../img/bnl/笔记本/2.webp'),
  new bnProducts('小米电视4A', '../img/bnl/笔记本/3.webp'),
  new bnProducts('小米电视4A', '../img/bnl/笔记本/4.webp'),
  new bnProducts('小米电视4A', '../img/bnl/笔记本/5.webp'),
  new bnProducts('小米电视4A', '../img/bnl/笔记本/6.webp'),
  new bnProducts('小米电视4A', '../img/bnl/笔记本/7.webp'),
  new bnProducts('小米电视4A', '../img/bnl/笔记本/8.webp'),
  new bnProducts('小米电视4A', '../img/bnl/笔记本/9.webp'),
  new bnProducts('小米电视4A', '../img/bnl/笔记本/10.webp'),
  new bnProducts('小米电视4A', '../img/bnl/笔记本/11.webp'),
  new bnProducts('小米电视4A', '../img/bnl/笔记本/12.webp'),
]
const chuxing = [
  new bnProducts('小米电视4A', '../img/bnl/出行/1.webp'),
  new bnProducts('小米电视4A', '../img/bnl/出行/2.webp'),
  new bnProducts('小米电视4A', '../img/bnl/出行/3.webp'),
  new bnProducts('小米电视4A', '../img/bnl/出行/4.webp'),
  new bnProducts('小米电视4A', '../img/bnl/出行/5.webp'),
  new bnProducts('小米电视4A', '../img/bnl/出行/6.webp'),
]
const erji = [
  new bnProducts('小米电视4A', '../img/bnl/耳机/1.webp'),
  new bnProducts('小米电视4A', '../img/bnl/耳机/2.webp'),
  new bnProducts('小米电视4A', '../img/bnl/耳机/3.webp'),
  new bnProducts('小米电视4A', '../img/bnl/耳机/4.webp'),
  new bnProducts('小米电视4A', '../img/bnl/耳机/5.webp'),
  new bnProducts('小米电视4A', '../img/bnl/耳机/6.webp'),
  new bnProducts('小米电视4A', '../img/bnl/耳机/7.webp'),
]
const jiankang = [
  new bnProducts('小米电视4A', '../img/bnl/健康/1.jpg'),
  new bnProducts('小米电视4A', '../img/bnl/健康/2.jpg'),
  new bnProducts('小米电视4A', '../img/bnl/健康/3.webg'),
  new bnProducts('小米电视4A', '../img/bnl/健康/4.jpg'),
  new bnProducts('小米电视4A', '../img/bnl/健康/5.jpg'),

]
const xiangbao = [
  new bnProducts('小米电视4A', '../img/bnl/箱包/1.webp'),
  new bnProducts('小米电视4A', '../img/bnl/箱包/2.jpg'),
  new bnProducts('小米电视4A', '../img/bnl/箱包/3.webp'),
  new bnProducts('小米电视4A', '../img/bnl/箱包/4.webp'),
  new bnProducts('小米电视4A', '../img/bnl/箱包/5.webp'),
  new bnProducts('小米电视4A', '../img/bnl/箱包/6.webp'),
  new bnProducts('小米电视4A', '../img/bnl/箱包/7.jpg'),
  new bnProducts('小米电视4A', '../img/bnl/箱包/8.webp'),
  new bnProducts('小米电视4A', '../img/bnl/箱包/9.jpg'),
]
const zhineng = [
  new bnProducts('小米电视4A', '../img/bnl/智能/1.webp'),
  new bnProducts('小米电视4A', '../img/bnl/智能/2.jpg'),
  new bnProducts('小米电视4A', '../img/bnl/智能/3.webp'),
  new bnProducts('小米电视4A', '../img/bnl/智能/4.webp'),
  new bnProducts('小米电视4A', '../img/bnl/智能/5.webp'),

]
const dianyuan = [
  new bnProducts('小米电视4A', '../img/bnl/电视/1.webp'),
  new bnProducts('小米电视4A', '../img/bnl/电视/2.webp'),
  new bnProducts('小米电视4A', '../img/bnl/电视/3.webp'),
  new bnProducts('小米电视4A', '../img/bnl/电视/4.webp'),
  new bnProducts('小米电视4A', '../img/bnl/电视/5.webp'),
  new bnProducts('小米电视4A', '../img/bnl/电视/6.webp'),

]

const productsData = {
  1: bnPhone,
  2: bnTv,
  3: bnJiadian,
  4: bnbijiben,
  5: chuxing,
  6: erji,
  7: jiankang,
  8: xiangbao,
  9: zhineng,
  10: dianyuan,
}

bannerL.addEventListener('mouseover', (e) => {
  const li = e.target.closest('li');
  if (li && li.dataset.container) {
    // 获取li的位置信息
    const liWidth = li.offsetWidth;

    // 动态定位
    container.style.left = `${liWidth.right}px`; // 右侧间距20px
    container.style.top = `${0}px`;

    // 注入对应内容（根据data-container的值）
    loadContainerContent(li.dataset.container);

    container.classList.add('active');
  }
});
bannerL.addEventListener('mouseleave', () => {
  container.classList.remove('active');
});
//隐藏逻辑


// 示例内容加载函数
// 根据containerId动态加载容器内容
function loadContainerContent(containerData) {
  // 这里根据containerId动态获取内容
  const currentData = productsData[containerData] || [];
  container.innerHTML = `
    <ul>
      ${currentData.map(item => `
        <li>
          <img src="${item.imgUrl}" alt="${item.name}">
          <span>${item.name}</span>
        </li>`
  ).join('')}
    </ul>
  `;
}
//banner轮播图
const bannerR = document.querySelector('.banner-r');
const backwards = document.querySelector('.backwards');
const next = document.querySelector('.next');
const bannerImgs = ["../img/2e389157059c44d9352b42e04407cbb7.jpg", "../img/5d2e4ce0cc22c7d87981bac22d64e44d.webp", "../img/57b08b308c5eacf0655fd5da8d5a965f.webp", "../img/adb7c8e38426ca84f283f77b48c0f49a.webp", "../img/e47bc402508c005ec3c0f4c13bb8b705.webp"]
// bannerR.innerHTML = bannerImgs.map(item => `<img src="${item}" alt="">`).join('');
// bannerR.innerHTML = `<img src="../img/2e389157059c44d9352b42e04407cbb7.jpg" alt="">`
bannerR.style.backgroundImage = `url(../img/2e389157059c44d9352b42e04407cbb7.jpg)`;
let index = 0;
let bannerClocks = null;

function bannerClock() {
  bannerClocks = setInterval(() => {
    index++;
    if (index > bannerImgs.length - 1) {
      index = 0;
    }
    bannerR.style.backgroundImage = `url(${bannerImgs[index]})`;
  }, 3000)
}
function stopInterval() {
  if (bannerClocks) {
    clearInterval(bannerClocks);
    bannerClocks = null;
  }
}
bannerClock()
next.addEventListener('click', () => {
  clearInterval(bannerClock)
  index++;
  if (index > bannerImgs.length - 1) {
    index = 0;
  }
  bannerR.style.backgroundImage = `url(${bannerImgs[index]})`;
  console.log(index)

})
backwards.addEventListener('click', () => {
  clearInterval(bannerClock)
  index--;
  if (index < 0) {
    index = bannerImgs.length - 1;
  }
  bannerR.style.backgroundImage = `url(${bannerImgs[index]})`;
  console.log(index)

})
bannerR.addEventListener('mouseover', () => {
  stopInterval()
})
bannerR.addEventListener('mouseleave', () => {
  bannerClock()
})