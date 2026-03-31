  // Wallpaper data
        const wallpapers = [
            { id: 1, title: "Mountain Sunrise", category: "nature", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", resolution: "3840x2160", downloads: 12400 },
            { id: 2, title: "Neon Gradient", category: "abstract", img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80", resolution: "3840x2160", downloads: 9800 },
            { id: 3, title: "Cosmic Nebula", category: "space", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80", resolution: "5120x2880", downloads: 15200 },
            { id: 4, title: "Ocean Waves", category: "nature", img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80", resolution: "3840x2160", downloads: 8700 },
            { id: 5, title: "Dark Minimal", category: "minimal", img: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&q=80", resolution: "3840x2160", downloads: 11300 },
            { id: 6, title: "Aurora Borealis", category: "nature", img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80", resolution: "5120x2880", downloads: 18900 },
            { id: 7, title: "Fluid Colors", category: "abstract", img: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80", resolution: "3840x2160", downloads: 7600 },
            { id: 8, title: "Night Sky Stars", category: "space", img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80", resolution: "5120x2880", downloads: 14500 },
            { id: 9, title: "Forest Mist", category: "nature", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80", resolution: "3840x2160", downloads: 10200 },
            { id: 10, title: "Geometric Dark", category: "dark", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80", resolution: "3840x2160", downloads: 9400 },
            { id: 11, title: "Sunset Beach", category: "nature", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", resolution: "3840x2160", downloads: 16800 },
            { id: 12, title: "Color Splash", category: "colorful", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80", resolution: "3840x2160", downloads: 6900 },
            { id: 13, title: "Winter Mountains", category: "nature", img: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600&q=80", resolution: "5120x2880", downloads: 13600 },
            { id: 14, title: "Dark Waves", category: "dark", img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&q=80", resolution: "3840x2160", downloads: 8100 },
            { id: 15, title: "Rainbow Prism", category: "colorful", img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80", resolution: "3840x2160", downloads: 7200 },
            { id: 16, title: "Galaxy Core", category: "space", img: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&q=80", resolution: "5120x2880", downloads: 11800 },
        ];

        const trendingData = [
            { title: "Mystic Waterfall", img: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8b30?w=500&q=80", downloads: "24.5K", likes: "18.2K", tags: ["nature", "4K", "landscape"] },
            { title: "Cyberpunk City", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&q=80", downloads: "19.8K", likes: "15.1K", tags: ["city", "neon", "dark"] },
            { title: "Milky Way Galaxy", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&q=80", downloads: "22.1K", likes: "17.8K", tags: ["space", "stars", "8K"] },
            { title: "Autumn Forest Path", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", downloads: "15.3K", likes: "12.4K", tags: ["nature", "autumn", "warm"] },
            { title: "Abstract Liquid", img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500&q=80", downloads: "18.7K", likes: "14.9K", tags: ["abstract", "colorful", "4K"] },
            { title: "Deep Ocean Blue", img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&q=80", downloads: "13.9K", likes: "10.6K", tags: ["ocean", "blue", "calm"] },
        ];

        let currentFilter = 'all';
        let likedItems = new Set();

        // Initialize gallery
        function renderGallery(filter = 'all') {
            const grid = document.getElementById('galleryGrid');
            const filtered = filter === 'all' ? wallpapers : wallpapers.filter(w => w.category === filter);
            
            grid.innerHTML = filtered.map(w => `
                <div class="gallery-item" data-category="${w.category}">
                    <img src="${w.img}" alt="${w.title}" loading="lazy" onclick="openModal('${w.img}', '${w.title}', '${w.resolution}', ${w.downloads})">
                    <div class="item-overlay">
                        <div class="item-actions">
                            <button class="item-action-btn ${likedItems.has(w.id) ? 'liked' : ''}" onclick="toggleLike(${w.id}, this)">
                                <i class="${likedItems.has(w.id) ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                            <button class="item-action-btn" onclick="openModal('${w.img}', '${w.title}', '${w.resolution}', ${w.downloads})">
                                <i class="fas fa-expand"></i>
                            </button>
                        </div>
                        <div class="item-info">
                            <h4>${w.title}</h4>
                            <span>${w.resolution} • ${w.downloads.toLocaleString()} downloads</span>
                        </div>
                        <button class="download-btn-overlay" onclick="downloadWallpaper()">
                            <i class="fas fa-download"></i> Download
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Render trending
        function renderTrending() {
            const grid = document.getElementById('trendingGrid');
            grid.innerHTML = trendingData.map(t => `
                <div class="trending-card">
                    <div class="trending-card-img">
                        <img src="${t.img}" alt="${t.title}" loading="lazy">
                    </div>
                    <div class="trending-card-body">
                        <h3>${t.title}</h3>
                        <div class="trending-card-meta">
                            <span><i class="fas fa-download"></i> ${t.downloads}</span>
                            <span><i class="fas fa-heart"></i> ${t.likes}</span>
                        </div>
                        <div class="trending-card-tags">
                            ${t.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Filter
        function setFilter(btn, category) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = category;
            renderGallery(category);
        }

        function filterByCategory(category) {
            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                const btn = document.querySelector(`.filter-btn[onclick*="${category}"]`);
                if (btn) setFilter(btn, category);
            }, 500);
        }

        // Like
        function toggleLike(id, btn) {
            event.stopPropagation();
            if (likedItems.has(id)) {
                likedItems.delete(id);
                btn.classList.remove('liked');
                btn.innerHTML = '<i class="far fa-heart"></i>';
            } else {
                likedItems.add(id);
                btn.classList.add('liked');
                btn.innerHTML = '<i class="fas fa-heart"></i>';
                // Animate
                btn.style.transform = 'scale(1.3)';
                setTimeout(() => btn.style.transform = 'scale(1)', 200);
            }
        }

        // Modal
        function openModal(img, title, resolution, downloads) {
            const modal = document.getElementById('modal');
            document.getElementById('modalImage').src = img.replace('w=600', 'w=1200');
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDesc').textContent = `Resolution: ${resolution} • Format: JPG • ${downloads.toLocaleString()} downloads`;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('active');
            document.body.style.overflow = '';
        }

        function toggleModalLike() {
            const btn = document.getElementById('modalLikeBtn');
            btn.classList.toggle('liked');
            if (btn.classList.contains('liked')) {
                btn.innerHTML = '<i class="fas fa-heart"></i> Saved';
                btn.style.background = '#e74c3c';
                btn.style.borderColor = '#e74c3c';
            } else {
                btn.innerHTML = '<i class="far fa-heart"></i> Save';
                btn.style.background = '';
                btn.style.borderColor = '';
            }
        }

        // Close modal on overlay click
        document.getElementById('modal').addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });

        // Download simulation
        function downloadWallpaper() {
            const btn = event.target.closest('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }, 2000);
            }, 1500);
        }

        // Search
        function searchWallpapers() {
            const query = document.getElementById('searchInput').value.toLowerCase().trim();
            if (!query) {
                renderGallery('all');
                return;
            }
            const grid = document.getElementById('galleryGrid');
            const results = wallpapers.filter(w => 
                w.title.toLowerCase().includes(query) || 
                w.category.toLowerCase().includes(query)
            );
            
            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
                if (results.length === 0) {
                    grid.innerHTML = '<div style="text-align:center;padding:60px 20px;grid-column:1/-1;"><h3 style="margin-bottom:8px;">No results found</h3><p style="color:var(--text-muted);">Try different keywords like "nature", "space", or "abstract"</p></div>';
                } else {
                    renderGallery('all');
                    grid.innerHTML = results.map(w => `
                        <div class="gallery-item" data-category="${w.category}">
                            <img src="${w.img}" alt="${w.title}" loading="lazy" onclick="openModal('${w.img}', '${w.title}', '${w.resolution}', ${w.downloads})">
                            <div class="item-overlay">
                                <div class="item-actions">
                                    <button class="item-action-btn" onclick="toggleLike(${w.id}, this)">
                                        <i class="far fa-heart"></i>
                                    </button>
                                    <button class="item-action-btn" onclick="openModal('${w.img}', '${w.title}', '${w.resolution}', ${w.downloads})">
                                        <i class="fas fa-expand"></i>
                                    </button>
                                </div>
                                <div class="item-info">
                                    <h4>${w.title}</h4>
                                    <span>${w.resolution} • ${w.downloads.toLocaleString()} downloads</span>
                                </div>
                                <button class="download-btn-overlay" onclick="downloadWallpaper()">
                                    <i class="fas fa-download"></i> Download
                                </button>
                            </div>
                        </div>
                    `).join('');
                }
            }, 300);
        }

        // Enter key search
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') searchWallpapers();
        });

        // Load more
        function loadMore() {
            const btn = event.target.closest('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            btn.disabled = true;
            setTimeout(() => {
                // Duplicate some items
                const grid = document.getElementById('galleryGrid');
                const items = grid.querySelectorAll('.gallery-item');
                const lastFour = Array.from(items).slice(-4);
                lastFour.forEach(item => {
                    const clone = item.cloneNode(true);
                    grid.appendChild(clone);
                });
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        }

        // Subscribe
        function subscribe(e) {
            e.preventDefault();
            const input = e.target.querySelector('input');
            const btn = e.target.querySelector('button');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                btn.style.background = '#27ae60';
                input.value = '';
                setTimeout(() => {
                    btn.innerHTML = 'Subscribe';
                    btn.style.background = '';
                }, 3000);
            }, 1000);
        }

        // Navbar scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            const backToTop = document.getElementById('backToTop');
            
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        // Mobile menu
        document.getElementById('mobileToggle').addEventListener('click', function() {
            const nav = document.getElementById('navLinks');
            nav.classList.toggle('open');
            this.innerHTML = nav.classList.contains('open') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('navLinks').classList.remove('open');
                document.getElementById('mobileToggle').innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Scroll to top
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Particles
        function createParticles() {
            const container = document.getElementById('particles');
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
                particle.style.animationDelay = Math.random() * 5 + 's';
                particle.style.width = (Math.random() * 3 + 1) + 'px';
                particle.style.height = particle.style.width;
                container.appendChild(particle);
            }
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === '/' && !e.target.matches('input')) {
                e.preventDefault();
                document.getElementById('searchInput').focus();
            }
        });

        // Active nav link on scroll
        const sections = document.querySelectorAll('section[id]');
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 200;
                const sectionId = section.getAttribute('id');
                const link = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (link) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                }
            });
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderGallery();
            renderTrending();
            createParticles();
        });