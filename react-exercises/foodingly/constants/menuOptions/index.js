import routes from '../routes';

export const menuOptions = {
  foodMenu: [
    {
      route: routes.foodGrid,
      text: 'Food Grip',
    },
    {
      route: routes.foodDetails,
      text: 'Food details',
    },
    {
      route: routes.cartView,
      text: 'Cart View',
    },
    {
      route: routes.checkout,
      text: 'Checkout View',
    },
    {
      route: routes.orderSucces,
      text: 'Order Succes',
    },
  ],

  blogMenu: [
    {
      route: routes.blog,
      text: 'Blog',
    },
    {
      route: routes.blogDetails,
      text: 'Blog Details',
    },
  ],

  pagesMenu: [
    {
      route: routes.aboutUs,
      text: 'About us',
    },
    {
      route: routes.reservation,
      text: 'Reservation',
    },
    {
      route: routes.chefs,
      text: 'Chefs',
    },
    {
      route: routes.testimonials,
      text: 'Testimonials',
    },
    {
      route: routes.faqs,
      text: 'FAQ',
    },
    {
      route: routes.privacyPolicy,
      text: 'Privacy Policy',
    },
    {
      route: routes.termsService,
      text: 'Terms Of Service',
    },
  ],

  userMenu: [
    {
      route: routes.login,
      text: 'Login',
    },
    {
      route: routes.register,
      text: 'Register',
    },
    {
      route: '/',
      text: 'Verify OTP',
    },
    {
      route: '/',
      text: 'Reset Password',
    },
    {
      route: routes.aboutUs,
      text: 'About us',
    },
  ],
  costumerMenu: [
    {
      route: routes.costumerDashboard,
      text: 'Dashboard',
    },
    {
      route: '/',
      text: 'Order history',
    },
    {
      route: '/',
      text: 'My profile',
    },
    {
      route: '/',
      text: 'notifications',
    },
  ],
};

export const mainMenuOptions = [
  {
    text: 'Home',
    route: routes.home,
  },

  {
    text: 'About us',
    route: routes.aboutUs,
  },

  {
    text: 'Food Menu',
    menuOptions: menuOptions.foodMenu,
  },
  {
    text: 'Blog',
    menuOptions: menuOptions.blogMenu,
  },
  {
    text: 'Pages',
    menuOptions: menuOptions.pagesMenu,
  },
  {
    text: 'Contact',
    route: routes.contact,
  },
];
