Feature('tes kuis');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('test kuis',  ({ I }) => {

//melihat navigasi tombol kuis
  I.seeElement('#navkuis');
//klik navigasi tombol kuis
  I.click('#btnkuis');
//melihat tombol mulai kuis
  I.seeElement('#btnmulai');
//klik tombol mulai kuis
  I.click('#btnmulai');

//Soal nomor 1

//melihat pertanyaan kuis
  I.seeElement('#quizQuestion');
//melihat nomor kuis
  I.seeElement('#quizNumber');
//melihat pilihan ganda kuis
  I.seeElement('#quizForm');
//klik tombol next dengan belum memilih jawaban
  I.click('#nextPage');
//tes eluar allert harus mengisi jawaban 
  I.acceptPopup();
//memilih jawaban pertanyaan 1 dengan opsi nilai 4
  I.click('#q1_option4');
//klik tombol next
  I.click('#nextPage');


//Soal nomor 2
  I.seeElement('#prevPage');
  I.click('#prevPage');
  I.seeElement('#q1_option4');
  I.click('#nextPage');
  I.seeElement('#quizQuestion');
  I.seeElement('#quizNumber');
  I.seeElement('#quizForm');
  I.click('#q2_option4');
  I.click('#nextPage');

//Soal nomor 3
  I.seeElement('#quizQuestion');
  I.seeElement('#quizNumber');
  I.seeElement('#quizForm');  
  I.click('#q3_option4');
  I.click('#nextPage');

//Soal nomor 4
  I.seeElement('#quizQuestion');
  I.seeElement('#quizNumber');
  I.seeElement('#quizForm'); 
  I.click('#q4_option4');
  I.click('#nextPage');

//Soal nomor 5
  I.seeElement('#quizQuestion');
  I.seeElement('#quizNumber');
  I.seeElement('#quizForm');
  I.click('#q5_option4');
  I.click('#nextPage');

//Soal nomor 6
  I.seeElement('#quizQuestion');
  I.seeElement('#quizNumber');
  I.seeElement('#quizForm'); 
  I.click('#q6_option4');
  I.click('#nextPage');

//Soal nomor 7
  I.seeElement('#quizQuestion');
  I.seeElement('#quizNumber');
  I.seeElement('#quizForm'); 
  I.click('#q7_option4');
  I.click('#nextPage');

//Soal nomor 8
  I.seeElement('#quizQuestion');
  I.seeElement('#quizNumber');
  I.seeElement('#quizForm'); 
  I.click('#q8_option4');
  I.click('#nextPage');

//Soal nomor 9
  I.seeElement('#quizQuestion');
  I.seeElement('#quizNumber');
  I.seeElement('#quizForm'); 
  I.click('#q9_option4');
  I.click('#nextPage');

////Soal nomor 10
  I.seeElement('#quizQuestion');
  I.seeElement('#quizNumber');
  I.seeElement('#quizForm'); 
  I.click('#q10_option4');
  I.click('#nextPage');

	//Hasil Quiz
//melihat judul hasil kuis
  I.seeElement('#h2hasilquiz');
//melihat deskripsi solusi hasil kuis
  I.seeElement('#phasilquiz');
});
