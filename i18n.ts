import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  let locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';

  if (!cookieStore.get('NEXT_LOCALE')) {
    const acceptLang = headers().get('accept-language');
    if (acceptLang && acceptLang.includes('vi')) {
      locale = 'vi';
    }
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
