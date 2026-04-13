import { useLanguage } from '../context/LanguageContext';

export default function AdminFooter({ isVisible }: { isVisible: boolean }) {
  const { lang } = useLanguage();
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-950 text-white p-4 text-center text-sm z-50">
      <h3 className="font-bold mb-2">
        {lang === 'en' ? 'Admin Traffic Monitor' : '管理员流量监控'}
      </h3>
      <p>
        {lang === 'en' ? 'Visitor location tracking is active via Google Analytics.' : '访客位置跟踪已通过Google Analytics激活。'}
      </p>
      <p>
        {lang === 'en' ? 'Please check your Google Analytics dashboard for real-time traffic and country data.' : '请查看您的Google Analytics仪表板以获取实时流量和国家/地区数据。'}
      </p>
    </div>
  );
}
