---
---

<div class="home">
    <header class="hero">
        <h1>Welcome to Scholarn</h1>
        <p>Your gateway to knowledge and learning.</p>
        <a href="{{ "/courses/" | relative_url }}" class="btn">Explore Courses</a>
    </header>

    <section class="featured-courses">
        <h2>Featured Courses</h2>
        <div class="course-grid">
            {% for course in site.courses limit: 4 %}
            <div class="course-card">
                <h3><a href="{{ course.url }}">{{ course.title }}</a></h3>
                <p>{{ course.description }}</p>
                <p><strong>Category:</strong> {{ course.category }}</p>
                <a href="{{ course.url }}" class="btn">View Course</a>
            </div>
            {% endfor %}
        </div>
    </section>
    
    <section>
        <header class="hero">
            <blockquote>
                <p><strong>"Education is the manifestation of the perfection already in man." - Swami Vivekananda</strong></p>
            </blockquote>
        </header>
    </section>
    <section class="testimonials">
        <h2>What Our Students Say</h2>
        <blockquote>
            <p>"Scholarn has transformed my learning experience!"</p>
            <cite>- Misbaul</cite>
        </blockquote>
        <blockquote>
            <p>"I love the variety of courses available."</p>
            <cite>- Sultan</cite>
        </blockquote>
    </section>

    <section class="latest-updates">
        <h2>Latest Updates</h2>
        <ul>
            {% for post in site.posts limit: 5 %}
            <li>
                <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
                <p>{{ post.excerpt }}</p>
            </li>
            {% endfor %}
        </ul>
    </section>
</div>

<style>
    .hero {
        background-color: #282828;
        padding: 2rem;
        text-align: center;
        margin-bottom: 2rem;
    }
    .hero h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    .hero p {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }
    .btn {
        background-color: #333;
        color: #fff;
        padding: 0.5rem 1rem;
        text-decoration: none;
        border-radius: 0.25rem;
    }
    .featured-courses {
        margin-bottom: 2rem;
    }
    .course-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .course-card {
        flex: 1 1 calc(25% - 1rem);
        background: #282828;
        border: 1px solid #ddd;
        border-radius: 0.5rem;
        padding: 1rem;
        text-align: center;
    }
    .testimonials {
        background: #282828;
        padding: 1rem;
        margin: 2rem 0;
        border-radius: 0.5rem;
    }
  
    .latest-updates ul {
        list-style: none;
        padding: 0;
    }
    .latest-updates li {
        margin-bottom: 1rem;
    }
</style>
