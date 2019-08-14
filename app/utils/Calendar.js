export default function DeliveryDate({ className, children }) {
  return (
    <div style={{ padding: '16px', background: '#216ba5', color: '#fff' }}>
      <CalendarContainer className={className}>
        <div style={{ background: '#f0f0f0' }}>Delivery Due Date</div>
        <div style={{ position: 'relative' }}>
          {children}
        </div>
      </CalendarContainer>
    </div>
  )
}