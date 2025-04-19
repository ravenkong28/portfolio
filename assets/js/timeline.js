$(document).ready(function () {
     // === WORK EXPERIENCE ===
     // $('.work-experience-content').first().addClass('active').slideDown();

     // $('.work-experience-title').on('click', function () {
     //      var $thisContent = $(this).next('.work-experience-content');
     //      if ($thisContent.hasClass('active')) {
     //           $thisContent.removeClass('active').slideUp();
     //           return;
     //      }
     //      $('.work-experience-content').removeClass('active').slideUp();
     //      $thisContent.addClass('active').slideDown();
     // });

     // $userContent.each(function () {
     //      $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
     // });

     // Buka konten pertama secara default
     $('.work-experience-content').first().addClass('active').slideDown();

     // Fungsi toggle (reusable)
     function toggleWorkContent($thisContent) {
          if ($thisContent.hasClass('active')) {
               $thisContent.stop(true, true).removeClass('active').slideUp();
          } else {
               $('.work-experience-content').stop(true, true).removeClass('active').slideUp();
               $thisContent.stop(true, true).addClass('active').slideDown();
          }
     }

     // Klik pada judul / tanggal
     $('#work-experience-timeline').on('click', '.vtimeline-block', function (e) {
          // Cegah toggle jika yang diklik adalah link atau button di dalam content
          if ($(e.target).closest('a, button').length > 0) return;

          const $thisContent = $(this).find('.work-experience-content');
          toggleWorkContent($thisContent);
     });

     // Klik pada titik
     $('#work-experience-timeline').on('click', '.vtimeline-icon', function () {
          const $content = $(this).siblings('.vtimeline-block').find('.work-experience-content');
          toggleWorkContent($content);
     });

     // === ORGANIZATION EXPERIENCE ===
     $('.organization-experience-content').first().addClass('active').slideDown();

     // Fungsi toggle (reusable)
     function toggleOrganizationContent($thisContent) {
          if ($thisContent.hasClass('active')) {
               $thisContent.stop(true, true).removeClass('active').slideUp();
          } else {
               $('.organization-experience-content').stop(true, true).removeClass('active').slideUp();
               $thisContent.stop(true, true).addClass('active').slideDown();
          }
     }

     // Klik pada judul / tanggal
     $('#organization-experience-timeline').on('click', '.vtimeline-block', function (e) {
          // Cegah toggle jika klik elemen interaktif seperti link atau button
          if ($(e.target).closest('a, button').length > 0) return;

          const $thisContent = $(this).find('.organization-experience-content');
          toggleOrganizationContent($thisContent);
     });

     // Klik pada titik
     $('#organization-experience-timeline').on('click', '.vtimeline-icon', function () {
          const $content = $(this).siblings('.vtimeline-block').find('.organization-experience-content');
          toggleOrganizationContent($content);
     });

     // === Timeline Builder (untuk semua timeline: work & organization) ===
     $('#work-experience-timeline, #organization-experience-timeline').each(function () {
          const $this = $(this);
          const $userContent = $this.children('div');

          $userContent.each(function () {
               $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
          });

          $this.find('.vtimeline-point').each(function () {
               $(this).prepend('<div class="vtimeline-icon"></div>');
          });

          $this.find('.vtimeline-content').each(function () {
               const date = $(this).data('date');
               if (date) {
                    $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
               }
          });
     });
});


