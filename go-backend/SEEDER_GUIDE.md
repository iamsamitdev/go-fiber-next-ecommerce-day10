# คู่มือการใช้งาน Database Seeder

## ภาพรวม
ระบบ seeder จะสร้างข้อมูลตัวอย่างสำหรับระบบ E-commerce API ประกอบด้วย:

- **10 หมวดหมู่สินค้า** (Categories)
- **20 สินค้า** กระจายในแต่ละหมวดหมู่
- **Admin User** (ถ้าตั้งค่าใน environment variables)
- **Roles** (admin, user)

## วิธีการรัน Seeder

### 1. ตั้งค่า Environment Variables (สำหรับ Admin User)

สร้างไฟล์ `.env` หรือเพิ่มตัวแปรต่อไปนี้:

```env
# Admin User Configuration
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=Admin123!@#
ADMIN_FIRST_NAME=Admin
ADMIN_LAST_NAME=User
```

> **หมายเหตุ:** รหัสผ่าน admin ต้องมีความซับซ้อน (8+ ตัวอักษร, ตัวใหญ่, ตัวเล็ก, ตัวเลข, อักขระพิเศษ)

### 2. รัน Migration และ Seeder

```bash
# รัน migration และ seed ข้อมูลพร้อมกัน
go run cmd/migrate/main.go -up
```

## ข้อมูลที่จะถูกสร้าง

### หมวดหมู่สินค้า (10 หมวดหมู่)

1. **Electronics** - อุปกรณ์อิเล็กทรอนิกส์และเทคโนโลยี
2. **Fashion** - เสื้อผ้าและแฟชั่น
3. **Home & Garden** - ของใช้ในบ้านและสวน
4. **Sports & Outdoors** - อุปกรณ์กีฬาและกิจกรรมกลางแจ้ง
5. **Books & Media** - หนังสือและสื่อต่างๆ
6. **Health & Beauty** - ผลิตภัณฑ์สุขภาพและความงาม
7. **Toys & Games** - ของเล่นและเกมส์
8. **Automotive** - อุปกรณ์และอะไหล่รถยนต์
9. **Food & Beverages** - อาหารและเครื่องดื่ม
10. **Office Supplies** - อุปกรณ์สำนักงาน

### สินค้าตัวอย่าง (20 รายการ)

#### Electronics
- iPhone 15 Pro (฿39,900)
- MacBook Air M2 (฿42,900)

#### Fashion
- เสื้อเชิ้ตผ้าคอตตอน (฿1,290)
- กางเกงยีนส์ Slim Fit (฿1,890)

#### Home & Garden
- โซฟาผ้า 3 ที่นั่ง (฿15,900)
- ชุดเครื่องนอน Cotton (฿2,490)

#### Sports & Outdoors
- รองเท้าวิ่ง Nike (฿3,290)
- ดัมเบลปรับน้ำหนักได้ (฿4,590)

#### Books & Media
- หนังสือ Clean Code (฿890)
- หนังสือ Design Patterns (฿1,290)

#### Health & Beauty
- ครีมบำรุงหน้า Vitamin C (฿1,590)
- แชมพูสมุนไพร (฿390)

#### Toys & Games
- ตัวต่อเลโก้ Creator (฿3,990)
- บอร์ดเกม Monopoly (฿1,290)

#### Automotive
- น้ำมันเครื่อง Mobil 1 (฿890)
- ยางรถยนต์ Michelin (฿3,290)

#### Food & Beverages
- กาแฟอราบิก้า 100% (฿590)
- ชาเขียวญี่ปุ่น (฿890)

#### Office Supplies
- เก้าอี้สำนักงานเออร์โกโนมิก (฿7,990)
- โต๊ะทำงานไม้โอ๊ค (฿5,490)

## คุณสมบัติของ Seeder

### 1. ป้องกันข้อมูลซ้ำ
- ตรวจสอบข้อมูลที่มีอยู่แล้วก่อนสร้างใหม่
- ไม่สร้างข้อมูลซ้ำถ้ารัน seeder หลายครั้ง

### 2. รองรับรูปภาพ
- ใช้รูปภาพจาก Unsplash
- แต่ละสินค้ามีรูปภาพประกอบ

### 3. ข้อมูลที่สมจริง
- ราคาสินค้าที่เหมาะสม
- จำนวนสต็อกที่หลากหลาย
- คำอธิบายสินค้าภาษาไทย

### 4. Admin User (Optional)
- สร้าง admin user ถ้าตั้งค่าใน environment
- ตรวจสอบความซับซ้อนของรหัสผ่าน
- ข้ามการสร้างถ้าไม่ได้ตั้งค่า

## การทดสอบ

หลังจากรัน seeder แล้ว สามารถทดสอบได้โดย:

### 1. ตรวจสอบหมวดหมู่
```bash
curl http://localhost:3000/api/v1/categories
```

### 2. ตรวจสอบสินค้า
```bash
curl http://localhost:3000/api/v1/products
```

### 3. ตรวจสอบสินค้าตามหมวดหมู่
```bash
curl "http://localhost:3000/api/v1/products/category/{category_id}"
```

### 4. ค้นหาสินค้า
```bash
curl "http://localhost:3000/api/v1/products/search?search=iPhone"
```

## ข้อควรระวัง

1. **Database Connection**: ตรวจสอบว่าเชื่อมต่อ database ได้
2. **Environment Variables**: ตั้งค่า admin credentials ถ้าต้องการ admin user
3. **Password Complexity**: รหัสผ่าน admin ต้องผ่านการตรวจสอบความซับซ้อน
4. **Unique Constraints**: หมวดหมู่และสินค้าจะไม่ซ้ำกัน

## Log Messages

- `🌱 Starting database seeding...` - เริ่มต้น seeding
- `✅ Category created: {name}` - สร้างหมวดหมู่สำเร็จ
- `✅ Product created: {name}` - สร้างสินค้าสำเร็จ
- `✅ Admin user created successfully` - สร้าง admin user สำเร็จ
- `⚠️ Admin user already exists` - admin user มีอยู่แล้ว
- `✅ Database seeding completed successfully!` - seeding เสร็จสิ้น 