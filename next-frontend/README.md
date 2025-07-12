# NextFiber Commerce

แพลตฟอร์ม e-commerce ที่ทันสมัย พัฒนาด้วย Next.js 15, TypeScript, Tailwind CSS และฟีเจอร์ React ที่ทันสมัย โปรเจ็กต์นี้ให้บริการการช้อปปิ้งออนไลน์แบบครบครันพร้อมกับ UI ที่สวยงามและรองรับทุกอุปกรณ์

## 🚀 ฟีเจอร์หลัก

- **เทคโนโลยีทันสมัย**: พัฒนาด้วย Next.js 15, React 19, TypeScript
- **UI ที่สวยงาม**: ออกแบบด้วย Tailwind CSS v4 และ Radix UI components
- **การตอบสนองต่อหน้าจอ**: แนวทาง Mobile-first พร้อมแอนิเมชั่นที่ทันสมัย
- **สถาปัตยกรรม Component**: โครงสร้างแบบโมดูลาร์และนำไปใช้ซ้ำได้
- **การปรับปรุงรูปภาพ**: การปรับปรุงรูปภาพอัตโนมัติของ Next.js
- **การปรับปรุงฟอนต์**: ฟอนต์ Geist family พร้อมการปรับปรุงอัตโนมัติ
- **องค์ประกอบแบบโต้ตอบ**: Swiper.js สำหรับสไลด์และแกลเลอรี่
- **ความปลอดภัยของประเภทข้อมูล**: การใช้งาน TypeScript แบบครบครัน

## 🛠️ เทคโนโลยีที่ใช้

- **เฟรมเวิร์ก**: [Next.js 15](https://nextjs.org/) พร้อม App Router
- **ภาษาโปรแกรม**: [TypeScript](https://www.typescriptlang.org/)
- **การจัดแต่งสไตล์**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **ไอคอน**: [Lucide React](https://lucide.dev/)
- **แอนิเมชั่น**: [tw-animate-css](https://github.com/ben-rogerson/twin.macro)
- **สไลด์เซอร์**: [Swiper.js](https://swiperjs.com/)
- **ฟอนต์**: [Geist](https://vercel.com/font) โดย Vercel

## 📁 โครงสร้างโปรเจ็กต์

```
nextfiber-commerce/
├── public/                          # ไฟล์สแตติก
│   ├── images/                      # รูปภาพสินค้าและ UI
│   │   ├── arrivals/               # รูปภาพสินค้าใหม่
│   │   ├── blog/                   # รูปภาพบล็อก
│   │   ├── cart/                   # รูปภาพตะกร้าสินค้า
│   │   ├── categories/             # รูปภาพหมวดหมู่
│   │   ├── checkout/               # ไอคอนชำระเงิน
│   │   ├── countdown/              # รูปภาพส่วนนับถอยหลัง
│   │   ├── hero/                   # รูปภาพส่วนหลัก
│   │   ├── icons/                  # ไอคอน UI
│   │   ├── logo/                   # โลโก้แบรนด์
│   │   ├── payment/                # ไอคอนการชำระเงิน
│   │   ├── products/               # รูปภาพสินค้า
│   │   ├── promo/                  # รูปภาพโปรโมชั่น
│   │   ├── sellers/                # รูปภาพขายดี
│   │   └── users/                  # รูปภาพผู้ใช้
│   └── *.svg                       # ไอคอน SVG
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (site)/                 # กลุ่มเส้นทางไซต์
│   │   │   └── layout.tsx          # เลย์เอาต์ไซต์พร้อม Header/Footer
│   │   ├── globals.css             # สไตล์ทั่วไป
│   │   └── favicon.ico             # ไอคอนไซต์
│   ├── components/                 # React components
│   │   ├── home/                   # คอมโพเนนต์หน้าแรก
│   │   ├── shared/                 # คอมโพเนนต์ที่ใช้ร่วมกัน
│   │   │   └── site/               # คอมโพเนนต์ทั่วไซต์ (Header, Footer)
│   │   └── ui/                     # คอมโพเนนต์ UI ที่ใช้ซ้ำได้
│   ├── lib/                        # ไลบรารี่เครื่องมือ
│   │   └── utils.ts                # ฟังก์ชั่นเครื่องมือ
│   └── types/                      # นิยาม TypeScript types
│       └── Menu.ts                 # นิยามประเภทเมนู
├── components.json                 # การตั้งค่า shadcn/ui
├── next.config.ts                  # การตั้งค่า Next.js
├── package.json                    # Dependencies และ scripts
├── postcss.config.mjs             # การตั้งค่า PostCSS
├── tailwind.config.js             # การตั้งค่า Tailwind CSS
└── tsconfig.json                   # การตั้งค่า TypeScript
```

## 🚀 การเริ่มต้นใช้งาน

### ข้อกำหนดเบื้องต้น

- Node.js 18+ และ npm/yarn/pnpm/bun
- Git

### การติดตั้ง

1. **โคลนโปรเจ็กต์**
   ```bash
   git clone <repository-url>
   cd nextfiber-commerce
   ```

2. **ติดตั้ง dependencies**
   ```bash
   npm install
   # หรือ
   yarn install
   # หรือ
   pnpm install
   # หรือ
   bun install
   ```

3. **รันเซิร์ฟเวอร์สำหรับพัฒนา**
   ```bash
   npm run dev
   # หรือ
   yarn dev
   # หรือ
   pnpm dev
   # หรือ
   bun dev
   ```

4. **เปิดเบราว์เซอร์**
   ไปที่ [http://localhost:3000](http://localhost:3000) เพื่อดูแอปพลิเคชั่น

## 📝 คำสั่งที่มีให้ใช้

- `npm run dev` - เริ่มเซิร์ฟเวอร์พัฒนาด้วย Turbopack
- `npm run build` - สร้างบิลด์สำหรับ production ที่ปรับปรุงแล้ว
- `npm run start` - เริ่มเซิร์ฟเวอร์ production
- `npm run lint` - รัน ESLint เพื่อตรวจสอบคุณภาพโค้ด

## 🏗️ สถาปัตยกรรม

### โครงสร้าง Component

- **Home Components** (`src/components/home/`): คอมโพเนนต์เฉพาะหน้าแรก
- **Shared Components** (`src/components/shared/`): คอมโพเนนต์ที่ใช้ร่วมกันทั่วไซต์
- **UI Components** (`src/components/ui/`): คอมโพเนนต์ UI พื้นฐาน (ปุ่ม, อินพุต, ฯลฯ)

### ระบบ Layout

โปรเจ็กต์ใช้ Next.js App Router พร้อมโครงสร้างเลย์เอาต์แบบจัดกลุ่ม:
- Root layout จัดการฟอนต์ทั่วไปและโครงสร้าง HTML พื้นฐาน
- Site layout (`(site)/layout.tsx`) รวม Header และ Footer
- แต่ละหน้าจะถูกแสดงผลภายในระบบเลย์เอาต์นี้

### วิธีการจัดการสไตล์

- **Tailwind CSS v4**: CSS framework แบบ utility-first
- **CSS Variables**: สำหรับธีมที่สม่ำเสมอ
- **Responsive Design**: แนวทาง Mobile-first
- **Component Variants**: ใช้ class-variance-authority สำหรับรูปแบบคอมโพเนนต์

## 🎨 ฟีเจอร์ UI/UX

- **ดีไซน์ทันสมัย**: อินเตอร์เฟซที่สะอาดและเรียบง่าย
- **เลย์เอาต์ตอบสนอง**: ทำงานได้กับทุกขนาดอุปกรณ์
- **องค์ประกอบแบบโต้ตอบ**: แอนิเมชั่นและทรานซิชั่นที่ลื่นไหล
- **การเข้าถึง**: สร้างด้วยแนวทางปฏิบัติที่ดีด้านการเข้าถึง
- **ประสิทธิภาพ**: รูปภาพและฟอนต์ที่ปรับปรุงแล้ว

## 🔧 การตั้งค่า

### Tailwind CSS
โปรเจ็กต์ใช้ Tailwind CSS v4 พร้อมการตั้งค่าที่กำหนดเองใน `tailwind.config.js`

### TypeScript
รองรับ TypeScript แบบเต็มรูปแบบพร้อมการตรวจสอบประเภทแบบเข้มงวดที่เปิดใช้ใน `tsconfig.json`

### Next.js
ตั้งค่าด้วย App Router, การปรับปรุงรูปภาพ และการปรับปรุงฟอนต์ใน `next.config.ts`

## 📱 การออกแบบตอบสนอง

แอปพลิเคชั่นสร้างด้วยแนวทาง mobile-first:
- **มือถือ**: 320px - 768px
- **แท็บเล็ต**: 768px - 1024px
- **เดสก์ท็อป**: 1024px+

## 🤝 การมีส่วนร่วม

1. Fork โปรเจ็กต์
2. สร้างบรานช์ฟีเจอร์ของคุณ (`git checkout -b feature/amazing-feature`)
3. Commit การเปลี่ยนแปลงของคุณ (`git commit -m 'Add some amazing feature'`)
4. Push ไปยังบรานช์ (`git push origin feature/amazing-feature`)
5. เปิด Pull Request

## 📄 ใบอนุญาต

โปรเจ็กต์นี้ได้รับใบอนุญาตภายใต้ MIT License - ดูไฟล์ [LICENSE](LICENSE) สำหรับรายละเอียด

## 🙏 การขอบคุณ

- [Next.js](https://nextjs.org/) สำหรับ React framework ที่ยอดเยี่ยม
- [Tailwind CSS](https://tailwindcss.com/) สำหรับ utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) สำหรับ UI components ที่เข้าถึงได้
- [Vercel](https://vercel.com/) สำหรับการโฮสติ้งและ Geist font family

## 📞 การสนับสนุน

สำหรับการสนับสนุน ส่งอีเมลไปที่ support@nextfiber-commerce.com หรือเข้าร่วม Slack channel ของเรา

---

สร้างด้วย ❤️ โดยใช้ Next.js และ TypeScript
