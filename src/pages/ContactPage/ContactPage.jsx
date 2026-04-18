export default function ContactPage() {
  return (
    <section className="contact-page">
      <p className="eyebrow">Form demo</p>
      <h1>Liên hệ tư vấn</h1>
      <form className="contact-form">
        <label>
          Họ tên
          <input type="text" placeholder="Nhập họ tên" />
        </label>
        <label>
          Số điện thoại
          <input type="text" placeholder="Nhập số điện thoại" />
        </label>
        <label>
          Nội dung
          <textarea rows="5" placeholder="Nhập nội dung cần tư vấn" />
        </label>
        <button type="button" className="primary-button">
          Gửi thông tin
        </button>
      </form>
    </section>
  )
}
