---
layout: home
---
<div class="hero">
    <h1>Welcome to Scholarn</h1>
    <p>Your gateway to knowledge and learning.</p>
    <a href="{{ "/courses/" | relative_url }}" class="btn">Explore Courses</a>
</div>

<section class="featured-courses">
<h2>Popular Courses</h2>
    <div class="course-grid">
            {% for course in site.courses limit: 2 %}
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
    <blockquote>
        <p><strong>"Education is the manifestation of the perfection already in man." - Swami Vivekananda</strong></p>
    </blockquote>
</section>

<h2>Latest Updates</h2>
