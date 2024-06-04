const discountCodeInput = document.getElementById('discount-code');
const submitButton = document.querySelector('.discount-code-container button[type="submit"]');

submitButton.addEventListener('click', () => {
  const discountCode = discountCodeInput.value.trim();
  // هنا يمكنك إضافة منطق لتحقق من كود الخصم مع قاعدة البيانات الخاصة بك
  if (discountCode === 'PONTE SOFT 989864') {
    // تطبيق الخصم هنا
    alert('تم خصم %20');
  } else {
    alert('كود الخصم غير صحيح!');
      }
});