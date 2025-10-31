const student = {
            id: 'STU-001',
            name: 'Juan Dela Cruz',
            gpa: 91.55,
        };

        const subjects = [
            { id: 'SUB-01', name: 'Mathematics', teacher: 'Mr. Smith', progress: 75, grade: 92, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="8" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="16" y2="21"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></svg>' },
            { id: 'SUB-02', name: 'English', teacher: 'Ms. Jones', progress: 60, grade: 88, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>' },
            { id: 'SUB-03', name: 'Science', teacher: 'Mr. Brown', progress: 85, grade: 95, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"/><path d="M14 9.31V2"/><path d="M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"/><path d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z"/></svg>' },
            { id: 'SUB-04', name: 'History', teacher: 'Ms. Davis', progress: 45, grade: 85, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M3.5 14H12"/><path d="M12 14v4.5"/><path d="m12 18.5 3.5-2 3.5 2"/><path d="M19 16.5V14"/><path d="M12 3v11"/><path d="M12 14a2 2 0 0 0-2-2H4.5a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2H10a2 2 0 0 0 2-2Z"/></svg>' },
            { id: 'SUB-05', name: 'Art', teacher: 'Mr. Wilson', progress: 90, grade: 98, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4 4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"/><path d="M18.37 7.63c.82 1 .82 2.72 0 3.73"/><path d="M5.63 7.63c-.82 1-.82 2.72 0 3.73"/></svg>' },
            { id: 'SUB-06', name: 'Computer Science', teacher: 'Ms. Taylor', progress: 70, grade: 91, icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
        ];
        
        const assignments = [
            { id: 'ASG-001', subjectName: 'Mathematics', title: 'Algebra II Worksheet', dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), status: 'Not Submitted' },
            { id: 'ASG-002', subjectName: 'English', title: 'Essay on "To Kill a Mockingbird"', dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), status: 'Not Submitted' },
            { id: 'ASG-003', subjectName: 'Science', title: 'Lab Report: Photosynthesis', dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), status: 'Not Submitted' },
            { id: 'ASG-004', subjectName: 'History', title: 'World War II Research Paper', dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), status: 'Submitted' },
        ];

        function formatDistanceToNow(date) {
            const seconds = Math.floor((new Date() - date) / 1000);
            const isPast = seconds > 0;
            const absSeconds = Math.abs(seconds);

            let interval = absSeconds / 31536000;
            if (interval > 1) return isPast ? `about ${Math.floor(interval)} years ago` : `in about ${Math.floor(interval)} years`;
            
            interval = absSeconds / 2592000;
            if (interval > 1) return isPast ? `about ${Math.floor(interval)} months ago` : `in about ${Math.floor(interval)} months`;
            
            interval = absSeconds / 86400;
            if (interval > 1) return isPast ? `${Math.floor(interval)} days ago` : `in ${Math.floor(interval)} days`;
            
            interval = absSeconds / 3600;
            if (interval > 1) return isPast ? `about ${Math.floor(interval)} hours ago` : `in about ${Math.floor(interval)} hours`;
            
            interval = absSeconds / 60;
            if (interval > 1) return isPast ? `about ${Math.floor(interval)} minutes ago` : `in about ${Math.floor(interval)} minutes`;
            
            return isPast ? `less than a minute ago` : `in less than a minute`;
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Populate Welcome
            const welcomeEl = document.getElementById('welcome-message');
            if (welcomeEl) {
                welcomeEl.textContent = `Welcome, ${student.name.split(' ')[0]}!`;
            }
            
            // Populate GPA
            const gpaEl = document.getElementById('gpa-value');
            if (gpaEl) {
                gpaEl.textContent = `${student.gpa.toFixed(1)}%`;
            }

            // Populate Enrolled Subjects
            const enrolledEl = document.getElementById('enrolled-subjects');
            if (enrolledEl) {
                enrolledEl.textContent = subjects.length;
            }

            // Populate Subjects Overview
            const subjectsGrid = document.getElementById('subjects-overview-grid');
            if (subjectsGrid) {
                subjects.slice(0, 3).forEach(subject => {
                    const subjectCard = `
                        <div class="card" style="display: flex; flex-direction: column;">
                            <div class="card-header flex-row items-center gap-4" style="padding-bottom: 0;">
                                <div class="h-12 w-12 flex items-center justify-center rounded-lg bg-secondary">
                                    ${subject.icon}
                                </div>
                                <div>
                                    <h3 class="font-semibold">${subject.name}</h3>
                                    <p class="text-sm text-muted-foreground">${subject.teacher}</p>
                                </div>
                            </div>
                            <div class="card-content flex-grow" style="padding-top: 1.5rem;">
                                <div class="mb-2 flex justify-between text-sm">
                                    <span>Progress</span>
                                    <span class="font-medium">${subject.progress}%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-indicator" style="transform: translateX(-${100 - subject.progress}%);"></div>
                                </div>
                            </div>
                            <div class="border-t p-4 pt-4">
                                <div class="flex justify-between items-center text-sm">
                                    <span class="text-muted-foreground">Current Grade</span>
                                    <span class="font-bold text-lg text-primary">${subject.grade}</span>
                                </div>
                            </div>
                        </div>
                    `;
                    subjectsGrid.innerHTML += subjectCard;
                });
            }

            // Populate Upcoming Deadlines
            const deadlinesBody = document.getElementById('upcoming-deadlines-body');
            if (deadlinesBody) {
                const now = new Date();
                const upcoming = assignments
                    .filter(a => a.status !== 'Submitted' && new Date(a.dueDate) > now)
                    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                    .slice(0, 4);

                upcoming.forEach(task => {
                    const dueDate = new Date(task.dueDate);
                    const daysLeft = (dueDate.getTime() - now.getTime()) / (1000 * 3600 * 24);
                    let badgeClass = 'badge-outline';
                    if (daysLeft < 3) badgeClass = 'badge-destructive';
                    else if (daysLeft < 7) badgeClass = 'badge-secondary';

                    const row = `
                        <tr>
                            <td>
                                <div class="font-medium">${task.title}</div>
                                <div class="text-sm text-muted-foreground sm:hidden">${task.subjectName}</div>
                            </td>
                            <td class="hidden sm:table-cell">${task.subjectName}</td>
                            <td class="text-right">
                                <div class="badge ${badgeClass}">
                                    ${formatDistanceToNow(dueDate)}
                                </div>
                            </td>
                        </tr>
                    `;
                    deadlinesBody.innerHTML += row;
                });
            }
        });