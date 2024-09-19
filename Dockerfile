# Χρησιμοποιούμε την εικόνα Node.js
FROM node:16

# Δημιουργούμε τον κατάλογο εργασίας για την εφαρμογή
WORKDIR /app

# Αντιγράφουμε το package.json και package-lock.json
COPY package*.json ./

# Εγκαθιστούμε τα dependencies
RUN npm install

# Αντιγράφουμε όλο το project
COPY . .

# Εκθέτουμε το port που χρησιμοποιεί η εφαρμογή (π.χ. 3000)
EXPOSE 3000

# Τρέχουμε την εφαρμογή
CMD ["npm", "start"]
