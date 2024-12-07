"use client"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg width="137" height="18" viewBox="0 0 137 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.7148 3.27734C15.4102 3.12891 15.0586 2.97266 14.6602 2.80859C14.2617 2.63672 13.8047 2.48437 13.2891 2.35156C12.7812 2.21875 12.207 2.10937 11.5664 2.02344C10.9258 1.92969 10.2148 1.88281 9.43359 1.88281C8.48828 1.88281 7.64453 1.9375 6.90234 2.04688C6.16797 2.15625 5.54297 2.32812 5.02734 2.5625C4.51953 2.78906 4.12891 3.07812 3.85547 3.42969C3.58984 3.78125 3.45703 4.19922 3.45703 4.68359C3.45703 5.08984 3.58203 5.44531 3.83203 5.75C4.08984 6.05469 4.43359 6.32422 4.86328 6.55859C5.30078 6.79297 5.80859 7.00781 6.38672 7.20312C6.97266 7.39062 7.58984 7.57031 8.23828 7.74219C8.89453 7.90625 9.56641 8.07422 10.2539 8.24609C10.9492 8.41797 11.6211 8.60547 12.2695 8.80859C12.9258 9.00391 13.543 9.22656 14.1211 9.47656C14.707 9.71875 15.2148 10.0039 15.6445 10.332C16.082 10.6602 16.4258 11.0352 16.6758 11.457C16.9336 11.8789 17.0625 12.3672 17.0625 12.9219C17.0625 13.5234 16.9492 14.0508 16.7227 14.5039C16.4961 14.9492 16.1875 15.3359 15.7969 15.6641C15.4141 15.9844 14.9609 16.2539 14.4375 16.4727C13.9219 16.6836 13.3672 16.8516 12.7734 16.9766C12.1875 17.1016 11.5781 17.1875 10.9453 17.2344C10.3203 17.2891 9.70312 17.3164 9.09375 17.3164C7.69531 17.3164 6.42578 17.2148 5.28516 17.0117C4.15234 16.8086 3.07031 16.5312 2.03906 16.1797V14.3867C3.10156 15.0195 4.22266 15.4531 5.40234 15.6875C6.58984 15.9219 7.83594 16.0391 9.14062 16.0391C10.0625 16.0391 10.9141 15.9844 11.6953 15.875C12.4766 15.7656 13.1523 15.5938 13.7227 15.3594C14.293 15.1172 14.7344 14.8047 15.0469 14.4219C15.3672 14.0391 15.5273 13.5703 15.5273 13.0156C15.5273 12.5703 15.3984 12.1797 15.1406 11.8438C14.8906 11.5078 14.5469 11.2148 14.1094 10.9648C13.6797 10.707 13.1719 10.4805 12.5859 10.2852C12.0078 10.0898 11.3945 9.91016 10.7461 9.74609C10.0977 9.57422 9.42578 9.41016 8.73047 9.25391C8.04297 9.08984 7.375 8.91406 6.72656 8.72656C6.07812 8.53906 5.46094 8.32812 4.875 8.09375C4.29688 7.85938 3.78906 7.58594 3.35156 7.27344C2.92188 6.95312 2.57812 6.58594 2.32031 6.17188C2.07031 5.75781 1.94531 5.27734 1.94531 4.73047C1.94531 4.19141 2.04688 3.71484 2.25 3.30078C2.45312 2.87891 2.73047 2.51562 3.08203 2.21094C3.44141 1.90625 3.85938 1.65234 4.33594 1.44922C4.8125 1.23828 5.32031 1.07422 5.85938 0.957031C6.40625 0.832031 6.97266 0.742188 7.55859 0.6875C8.14453 0.632812 8.72266 0.605469 9.29297 0.605469C9.91797 0.605469 10.5078 0.632812 11.0625 0.6875C11.625 0.742188 12.1641 0.816406 12.6797 0.910156C13.2031 0.996094 13.7109 1.09766 14.2031 1.21484C14.7031 1.33203 15.207 1.45703 15.7148 1.58984V3.27734Z" fill="#C387FF"/>
        <path d="M37.8281 16.1562C37.1719 16.3594 36.5625 16.5352 36 16.6836C35.4375 16.8242 34.8828 16.9375 34.3359 17.0234C33.7891 17.1172 33.2305 17.1836 32.6602 17.2227C32.0977 17.2695 31.4766 17.293 30.7969 17.293C29.2188 17.293 27.793 17.1016 26.5195 16.7188C25.2461 16.3359 24.1602 15.7891 23.2617 15.0781C22.3711 14.3594 21.6836 13.4922 21.1992 12.4766C20.7148 11.4609 20.4727 10.3203 20.4727 9.05469C20.4727 7.82812 20.7031 6.70312 21.1641 5.67969C21.6328 4.65625 22.2852 3.77734 23.1211 3.04297C23.957 2.30859 24.957 1.73828 26.1211 1.33203C27.2852 0.925781 28.5703 0.722656 29.9766 0.722656C31.4375 0.722656 32.7383 0.917969 33.8789 1.30859C35.0195 1.69922 35.9805 2.25781 36.7617 2.98438C37.543 3.71094 38.1367 4.59375 38.543 5.63281C38.9492 6.66406 39.1523 7.82812 39.1523 9.125V9.48828H21.9844C22.0703 10.4883 22.3203 11.3906 22.7344 12.1953C23.1484 13 23.7344 13.6836 24.4922 14.2461C25.2578 14.8086 26.1953 15.2422 27.3047 15.5469C28.4219 15.8438 29.7227 15.9922 31.207 15.9922C31.8398 15.9922 32.4805 15.9492 33.1289 15.8633C33.7773 15.7773 34.3984 15.6641 34.9922 15.5234C35.5859 15.375 36.1289 15.2109 36.6211 15.0312C37.1133 14.8438 37.5156 14.6523 37.8281 14.457V16.1562Z" fill="#C387FF"/>
        <path d="M59.6719 16.1562C59.0156 16.3594 58.4062 16.5352 57.8438 16.6836C57.2812 16.8242 56.7266 16.9375 56.1797 17.0234C55.6328 17.1172 55.0742 17.1836 54.5039 17.2227C53.9414 17.2695 53.3203 17.293 52.6406 17.293C51.0625 17.293 49.6367 17.1016 48.3633 16.7188C47.0898 16.3359 46.0039 15.7891 45.1055 15.0781C44.2148 14.3594 43.5273 13.4922 43.043 12.4766C42.5586 11.4609 42.3164 10.3203 42.3164 9.05469C42.3164 7.82812 42.5469 6.70312 43.0078 5.67969C43.4766 4.65625 44.1289 3.77734 44.9648 3.04297C45.8008 2.30859 46.8008 1.73828 47.9648 1.33203C49.1289 0.925781 50.4141 0.722656 51.8203 0.722656C53.2812 0.722656 54.582 0.917969 55.7227 1.30859C56.8633 1.69922 57.8242 2.25781 58.6055 2.98438C59.3867 3.71094 59.9805 4.59375 60.3867 5.63281C60.793 6.66406 60.9961 7.82812 60.9961 9.125V9.48828H43.8281C43.9141 10.4883 44.1641 11.3906 44.5781 12.1953C44.9922 13 45.5781 13.6836 46.3359 14.2461C47.1016 14.8086 48.0391 15.2422 49.1484 15.5469C50.2656 15.8438 51.5664 15.9922 53.0508 15.9922C53.6836 15.9922 54.3242 15.9492 54.9727 15.8633C55.6211 15.7773 56.2422 15.6641 56.8359 15.5234C57.4297 15.375 57.9727 15.2109 58.4648 15.0312C58.957 14.8438 59.3594 14.6523 59.6719 14.457V16.1562Z" fill="#C387FF"/>
        <path d="M81.7969 15.7227C81.2344 15.957 80.6758 16.1719 80.1211 16.3672C79.5742 16.5625 79.0039 16.7305 78.4102 16.8711C77.8164 17.0117 77.1914 17.1211 76.5352 17.1992C75.8789 17.2773 75.1641 17.3164 74.3906 17.3164C73.4375 17.3164 72.5195 17.2383 71.6367 17.082C70.7617 16.9258 69.9453 16.6914 69.1875 16.3789C68.4297 16.0664 67.7422 15.6797 67.125 15.2188C66.5078 14.75 65.9766 14.207 65.5312 13.5898C65.0938 12.9727 64.7539 12.2773 64.5117 11.5039C64.2773 10.7305 64.1602 9.88281 64.1602 8.96094C64.1602 8.03906 64.2773 7.19141 64.5117 6.41797C64.7539 5.64453 65.0938 4.94922 65.5312 4.33203C65.9766 3.71484 66.5078 3.17578 67.125 2.71484C67.7422 2.24609 68.4297 1.85547 69.1875 1.54297C69.9453 1.23047 70.7617 0.996094 71.6367 0.839844C72.5117 0.683594 73.4297 0.605469 74.3906 0.605469C75.1641 0.605469 75.8789 0.644531 76.5352 0.722656C77.1914 0.800781 77.8164 0.910156 78.4102 1.05078C79.0039 1.19141 79.5742 1.35937 80.1211 1.55469C80.6758 1.74219 81.2344 1.95312 81.7969 2.1875V3.94531C81.3516 3.66406 80.875 3.39844 80.3672 3.14844C79.8594 2.89844 79.3086 2.67969 78.7148 2.49219C78.1289 2.30469 77.5 2.15625 76.8281 2.04688C76.1562 1.9375 75.4375 1.88281 74.6719 1.88281C73.125 1.88281 71.7852 2.05078 70.6523 2.38672C69.5195 2.72266 68.582 3.19922 67.8398 3.81641C67.1055 4.42578 66.5586 5.16797 66.1992 6.04297C65.8477 6.91016 65.6719 7.88281 65.6719 8.96094C65.6719 10.0391 65.8477 11.0117 66.1992 11.8789C66.5586 12.7461 67.1055 13.4883 67.8398 14.1055C68.582 14.7148 69.5195 15.1875 70.6523 15.5234C71.7852 15.8516 73.125 16.0156 74.6719 16.0156C75.4375 16.0156 76.1602 15.9609 76.8398 15.8516C77.5273 15.7422 78.168 15.5938 78.7617 15.4062C79.3633 15.2188 79.9141 15.0039 80.4141 14.7617C80.9219 14.5117 81.3828 14.25 81.7969 13.9766V15.7227Z" fill="#C387FF"/>
        <path d="M98.0742 2.14062C97.8477 2.07031 97.5312 1.99609 97.125 1.91797C96.7266 1.83203 96.2109 1.78906 95.5781 1.78906C94.7031 1.78906 93.8789 1.89844 93.1055 2.11719C92.3398 2.32812 91.625 2.61719 90.9609 2.98438C90.3047 3.35156 89.6953 3.78125 89.1328 4.27344C88.5703 4.75781 88.0625 5.27344 87.6094 5.82031V17H86.1445V0.898438H87.6094V4.17969C88.1328 3.64062 88.6992 3.14453 89.3086 2.69141C89.9258 2.23828 90.5742 1.85156 91.2539 1.53125C91.9336 1.20312 92.6445 0.949219 93.3867 0.769531C94.1367 0.582031 94.9102 0.488281 95.707 0.488281C95.9805 0.488281 96.2266 0.496094 96.4453 0.511719C96.6641 0.519531 96.8633 0.535156 97.043 0.558594C97.2305 0.574219 97.4062 0.59375 97.5703 0.617188C97.7344 0.640625 97.9023 0.667969 98.0742 0.699219V2.14062Z" fill="#C387FF"/>
        <path d="M117.023 16.1562C116.367 16.3594 115.758 16.5352 115.195 16.6836C114.633 16.8242 114.078 16.9375 113.531 17.0234C112.984 17.1172 112.426 17.1836 111.855 17.2227C111.293 17.2695 110.672 17.293 109.992 17.293C108.414 17.293 106.988 17.1016 105.715 16.7188C104.441 16.3359 103.355 15.7891 102.457 15.0781C101.566 14.3594 100.879 13.4922 100.395 12.4766C99.9102 11.4609 99.668 10.3203 99.668 9.05469C99.668 7.82812 99.8984 6.70312 100.359 5.67969C100.828 4.65625 101.48 3.77734 102.316 3.04297C103.152 2.30859 104.152 1.73828 105.316 1.33203C106.48 0.925781 107.766 0.722656 109.172 0.722656C110.633 0.722656 111.934 0.917969 113.074 1.30859C114.215 1.69922 115.176 2.25781 115.957 2.98438C116.738 3.71094 117.332 4.59375 117.738 5.63281C118.145 6.66406 118.348 7.82812 118.348 9.125V9.48828H101.18C101.266 10.4883 101.516 11.3906 101.93 12.1953C102.344 13 102.93 13.6836 103.688 14.2461C104.453 14.8086 105.391 15.2422 106.5 15.5469C107.617 15.8438 108.918 15.9922 110.402 15.9922C111.035 15.9922 111.676 15.9492 112.324 15.8633C112.973 15.7773 113.594 15.6641 114.188 15.5234C114.781 15.375 115.324 15.2109 115.816 15.0312C116.309 14.8438 116.711 14.6523 117.023 14.457V16.1562Z" fill="#C387FF"/>
        <path d="M128.672 2.23438V17H127.219V2.23438H119.895V0.898438H135.996V2.23438H128.672Z" fill="#C387FF"/>
      </svg>
    </div>
  )
}