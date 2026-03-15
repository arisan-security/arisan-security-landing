import * as React from "react"
import Page from "@/layouts/Page";
import { useTranslations } from "next-intl";
import type { GetStaticPropsContext } from 'next';

const ContactPage = () => {
  const t = useTranslations('Contact');
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Page 
      title="Contact"
      path="hubungi-kami"
      seoProps={{
        title: "A-SEC | Connect with us",
        description: "Keep in touch with us for more knowledge about how to be secure on the internet",
        article: false,
      }}>
      <section className="bg-dark-blue">
        <div className="min-h-[938px] !max-w-[1440px] md:px-[10%] m-auto flex items-start justify-center">
          <div className="w-full pt-[200px] px-4 md:px-5">
            <div className="bg-[#D9D9D9] grid grid-cols-1 md:grid-cols-[35%_1fr] text-dark-blue w-full max-w-[800px] mx-auto overflow-hidden rounded-[22px] p-8 md:p-10">
              <div className="pr-5 mb-8 md:mb-0">
                <h2 className="font-bold text-[40px] leading-tight">{t('title')}</h2>
                <p className="text-base text-justify mt-6 mb-8">
                  {t('description')}
                </p>
                <a href="https://s.id/arisansecurity" target="_blank" rel="noopener noreferrer" className="text-[#6947FF] font-semibold underline">{t('portal')}</a>
              </div>
              <div>
                <form name="contact" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="absolute -left-[9999px]" aria-hidden="true">
                    <label>Don&#39;t fill this out: <input name="bot-field" /></label>
                  </p>
                  <div>
                    <label className="font-bold text-sm">{t('nameLabel')}</label>
                    <input className="px-3 py-2 mt-1 w-full bg-white rounded-md outline-none text-sm" name="name" placeholder={t('namePlaceholder')} />
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-sm">{t('emailLabel')}</label>
                    <input className="px-3 py-2 mt-1 w-full bg-white rounded-md outline-none text-sm" name="email" placeholder={t('emailPlaceholder')} />
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-sm">{t('phoneLabel')}</label>
                    <input className="px-3 py-2 mt-1 w-full bg-white rounded-md outline-none text-sm" name="phone" placeholder={t('phonePlaceholder')} />
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-sm">{t('messageLabel')}</label>
                    <textarea className="px-3 py-2 mt-1 w-full bg-white rounded-md outline-none text-sm" name="message" placeholder={t('messagePlaceholder')} rows={2} />
                  </div>
                  <div className="mt-6 text-right">
                    <button type="submit" disabled={status === 'submitting'} className="rounded-[14px] bg-dark-blue text-white px-10 py-2 font-semibold disabled:opacity-50">
                      {status === 'submitting' ? t('submitting') : t('submit')}
                    </button>
                    {status === 'success' && <p className="text-green-700 mt-2 text-sm">{t('success')}</p>}
                    {status === 'error' && <p className="text-red-600 mt-2 text-sm">{t('error')}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default ContactPage

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
}
