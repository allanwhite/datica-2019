const element=document.querySelector(".menu-aim"),options={menuItemSelector:".menu-aim__item",menuItemActiveClassName:"menu-aim__item--active",delayingClassName:"menu-aim--delaying"};"large"!=Foundation.MediaQuery.current&&"xlarge"!=Foundation.MediaQuery.current||menuAim(element,options);var menuButton=$(".mobile-menu"),nav=$(".main-header nav.left");menuButton.click(function(){nav.fadeToggle(fadeInTime)});