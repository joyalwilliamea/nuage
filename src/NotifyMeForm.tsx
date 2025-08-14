import { useState } from 'react';

interface NotifyMeFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotifyMeForm = ({ isOpen, onClose }: NotifyMeFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Auto close after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '' });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6 md:px-8">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-PTSans font-semibold text-black">Notify Me</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl p-1 hover:bg-gray-100 rounded transition-colors"
          >
            ×
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-6 sm:py-8">
            <div className="text-green-600 mb-3 sm:mb-4">
              <svg className="mx-auto w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-PTSans text-black mb-1 sm:mb-2">Thank You!</h3>
            <p className="text-sm sm:text-base text-gray-600 font-PTSans">We'll notify you when NUAGE launches.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-PTSans text-gray-700 mb-1 sm:mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-PTSans"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-PTSans text-gray-700 mb-1 sm:mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-PTSans"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-PTSans text-gray-700 mb-1 sm:mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-none focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-PTSans"
                placeholder="Enter your phone number"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3 mt-4 sm:mt-6 bg-black text-white text-sm sm:text-base font-PTSans rounded-none hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transform"
            >
              {isSubmitting ? 'Submitting...' : 'Notify Me'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NotifyMeForm;